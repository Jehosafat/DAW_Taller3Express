'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let productos = [
      'iPhone XS', 'GPU NVIDIA RTX 3070 Ti', 'CPU Core I7 4790', 'MEMORIA RAM 8GB',
      'GPU GTX 1080 Ti', 'Monitor ASUS', 'Motherboard GYGABYTE', 'Logitech G9305']
    for(let producto of productos) {
      await queryInterface.bulkInsert('productos', [{
        nombre: producto,
        descripcion: `Descripción del producto ${producto}` ,
        precio: parseFloat((Math.random() * 1000).toFixed(2)),
        stock: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};