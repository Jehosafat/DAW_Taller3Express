'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedidoproducto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pedidoproducto.init({
    pedido_id: DataTypes.INTEGER,
    producto_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'pedidoproducto',
    tableName: 'pedidoproductos'
  });
  return pedidoproducto;
};