'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Albums', [
     {name: 'Dogs', userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Cats', userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Dogs and Cats', userId: 1, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Other', userId: 1, createdAt: new Date(), updatedAt: new Date()}
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
