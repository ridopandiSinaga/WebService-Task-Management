'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert(
        "items",
        [
          {
            name: "New todolist kotlin android",
            todoId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "UI and UX",
            todoId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('items', null, {});
  }
};
