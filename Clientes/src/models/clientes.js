'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clientes.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.BIGINT,
    endereco: DataTypes.STRING,
    data_de_aniversario: DataTypes.DATE,
    historico: DataTypes.FLOAT,
    faixa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};