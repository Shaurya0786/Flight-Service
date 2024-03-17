'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports',{
      type: 'FOREIGN KEY',
      name:'city_fkey_constraint',
      fields : ['cityid'],
      references:{
        table:'cities',
        field:'id'
      },
      onUPDATE:'CASCADE',
      onDELETE:'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports','city_fkey_constraint')
  }
};
