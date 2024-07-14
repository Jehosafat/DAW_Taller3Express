'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.producto.belongsToMany(models.pedido, { 
        through:'pedidoproductos', foreignKey: "producto_id" 
      });
    }
  }
  producto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'producto',
    tableName: 'productos'
  });
  return producto;
};