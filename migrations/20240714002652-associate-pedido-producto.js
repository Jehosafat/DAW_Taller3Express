'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */


    await queryInterface.addConstraint('pedidoproductos', {
      fields: ['producto_id'],
      name: 'producto_id_fk',
      type: 'foreign key',
      references: {
        table: 'productos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
    });
    
    await queryInterface.addConstraint('pedidoproductos', {
      fields: ['pedido_id'],
      name: 'pedido_id_fk',
      type: 'foreign key',
      references: {
        table: 'pedidos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'set null'
      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('pedidoproductos', 'pedido_id_fk');
    await queryInterface.removeConstraint('pedidoproductos', 'producto_id_fk');
  }
};
