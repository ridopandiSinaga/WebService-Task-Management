'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert(
        "todos",
        [
          {
            name: "Doing",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Done",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('todos', null, {});
  }
};
