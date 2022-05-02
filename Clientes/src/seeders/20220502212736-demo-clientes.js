'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Clientes', [
        
  
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Clientes', null, {});

  }
};
