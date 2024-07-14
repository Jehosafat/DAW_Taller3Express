'use strict';
const estados = ['completado', 'pendiente', 'cancelado'];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Crear algunos pedidos
    let pedidos = [];
    
    // Obtener todos los clientes para asignar idcliente aleatoriamente
    const clientes = await queryInterface.sequelize.query('SELECT id FROM clientes');
    
    for (let i = 0; i < 15; i++) {
      const cliente_id = clientes[0][Math.floor(Math.random() * clientes[0].length)].id;
      pedidos.push({
        cliente_id: cliente_id,
        estado: estados[Math.floor(Math.random() * estados.length)],
        fecha: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    
    await queryInterface.bulkInsert('pedidos', pedidos, {});
  },

  async down(queryInterface, Sequelize) {
    // Borrar todos los pedidos
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
