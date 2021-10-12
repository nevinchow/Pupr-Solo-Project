'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      */
   return queryInterface.bulkInsert('Photos', [
     {name: "Test", imageUrl: "http://thecatandthedog.com/wp-content/uploads/2020/11/105992231-1561667465295gettyimages-521697453.jpeg", userId:5, createdAt: new Date(), updatedAt: new Date()},
     {name: "Test", imageUrl: "http://thecatandthedog.com/wp-content/uploads/2020/11/105992231-1561667465295gettyimages-521697453.jpeg", userId:4, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Photos', null, {});
  }
};
