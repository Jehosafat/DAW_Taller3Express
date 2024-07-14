'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Obtener todos los pedidos y productos para crear relaciones entre ellos
    const pedidos = await queryInterface.sequelize.query('SELECT id FROM pedidos');
    const productos = await queryInterface.sequelize.query('SELECT id, precio FROM productos');
    
    // Crear entradas en la tabla prodxpedido relacionando productos con pedidos
    let pedidoproductos = [];
    
    for (let pedido of pedidos[0]) {
      // Seleccionar un número aleatorio de productos para cada pedido
      const numProductos = Math.floor(Math.random() * productos[0].length) + 1;
      const productosSeleccionados = [];
      
      while (productosSeleccionados.length < numProductos) {
        const producto = productos[0][Math.floor(Math.random() * productos[0].length)];
        if (!productosSeleccionados.find(p => p.id === producto.id)) {
          productosSeleccionados.push(producto);
        }
      }
      
      for (let producto of productosSeleccionados) {
        const cantidad = Math.floor(Math.random() * 5) + 1; // Cantidad aleatoria entre 1 y 5
        pedidoproductos.push({
          pedido_id: pedido.id,
          producto_id: producto.id,
          cantidad: cantidad,
          precio: producto.precio * cantidad, // Precio total por producto
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }
    await queryInterface.bulkInsert('pedidoproductos', pedidoproductos, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedidoproductos', null, {});
  }
};
