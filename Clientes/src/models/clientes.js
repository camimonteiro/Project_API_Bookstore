// 'use strict';

// module.exports = (sequelize, DataTypes) => {
//   const Clientes = sequelize.define('Clientes', {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     cpf: DataTypes.BIGINT,
//     endereco: DataTypes.STRING,
//     data_de_aniversario: DataTypes.DATE,
//     historico: DataTypes.FLOAT,
//     faixa: DataTypes.STRING
//   }, {});
//   Clientes.associate = function(models) {
//     // associations can be defined here
//   };
//   return Clientes;
// }
  'use strict';
  const { Sequelize, DataTypes } = require('sequelize');
  const sequelize = new Sequelize('bookstore_clients', 'root', 'marica22', {
    host: 'localhost',
    dialect: 'mysql'
});

const Clientes = sequelize.define('Clientes', {
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  cpf: DataTypes.BIGINT,
  endereco: DataTypes.STRING,
  data_de_aniversario: DataTypes.DATE,
  historico: DataTypes.FLOAT,
  faixa: DataTypes.STRING

  }, {});
  Clientes.associate = function(models) {
    // associations can be defined here
  };
module.exports = Clientes;