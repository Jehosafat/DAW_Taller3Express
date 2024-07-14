'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <20; i++) {
      let nombreCliente = 'Cliente '+i;
      await queryInterface.bulkInsert('clientes', [{
        nombre: nombreCliente,
        apellido: `Apellido del ${nombreCliente}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  },
};