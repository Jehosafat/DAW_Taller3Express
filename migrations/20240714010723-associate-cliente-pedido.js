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
    

    await queryInterface.addConstraint('pedidos', {
      fields: ['cliente_id'],
      type: 'foreign key',
      name: 'cliente_id_fk',
      references: {
        table: 'clientes',
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
    await queryInterface.removeConstraint('pedidos', 'cliente_id_fk');
  }
};
