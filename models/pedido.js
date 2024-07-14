'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.pedido.belongsTo(models.cliente, {foreignKey: "cliente_id" });
      models.pedido.belongsToMany(models.producto, { through:'pedidoproductos', foreignKey: "pedido_id" });
    }
  }
  pedido.init({
    cliente_id: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'pedido',
    tableName: 'pedidos'
  });
  return pedido;
};