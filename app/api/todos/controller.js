const { Todo, Item, sequelize} = require('../../db/models');
const {Op, QueryTypes} = require('sequelize');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await Todo.findAll({
        attributes: ['id', 'name'],
        include: {
          model: Item,
          attributes: ['id', 'name', 'status'],
        },
        order: [['id', 'ASC']],
      });

      res.status(200).json({ message: 'success', data: result });
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const result = await Todo.create({ name });

      res.status(201).send({ message: 'success', data: result });
    } catch (err) {
      next(err);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const result = await Todo.findOne({
        where: { id: req.params.id },
      });

      res.status(200).json({ message: 'success', data: result });
    } catch (err) {
      next(err);
    }
  },
  update: (req, res, next) => {
    const { name } = req.body;
    Todo.findOne({
      where: { id: req.params.id },
    })
      .then((todo) => {
        todo.update({ name }).then(() => {
          res.status(200).json({ message: 'success', data: todo });
        });
      })
      .catch((err) => {
        next(err);
      });
  },
  destroy: (req, res, next) => {
    Todo.findOne({ where: { id: req.params.id } })
      .then((todo) => {
        todo.destroy().then(() => {
          res.status(200).json({ message: 'success', data: todo });
        });
      })
      .catch((err) => {
        next(err);
      });
  },
  getSearch: async(req, res, next) => {
    const filters = req.query.keywords;
    try {
      const result = await sequelize.query
      (
        `SELECT Todo.id, 
        Todo.name, 
        \`Items\`.\`id\` AS 'Items.id',
        \`Items\`.\`name\` AS 'Items.name',
        \`Items\`.\`status\` AS 'Items.status' 
        FROM Todos AS Todo 
        LEFT OUTER JOIN Items AS \`Items\`
        ON Todo.id = \`Items\`.\`TodoId\` 
        WHERE ((Todo.name LIKE '%${filters}%' OR \`Items\`.\`name\` LIKE '%${filters}%')) ORDER BY Todo.id ASC;`,
        {
          nest: true,
          type : QueryTypes.SELECT,
        }
      )

      res.status(200).json({ message: 'success', data: result });
    }
    catch (err) {
      next(err);
    }
  }
};
