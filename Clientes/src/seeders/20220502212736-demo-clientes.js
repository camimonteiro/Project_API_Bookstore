'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Clientes', 
      [{"nome":"Herta Donoher","email":"hdonoher0@virginia.edu","cpf":"7279374085","endereco":"9 Namekagon Lane","data_de_aniversario":"2020-03-18","historico":525.72,"faixa":"diamante","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Durant Dewicke","email":"ddewicke1@i2i.jp","cpf":"8539444127","endereco":"08 Thackeray Plaza","data_de_aniversario":"1971-08-29","historico":219.64,"faixa":"diamante","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Mariellen Manuaud","email":"mmanuaud2@livejournal.com","cpf":"0593234111","endereco":"744 Raven Street","data_de_aniversario":"2000-05-21","historico":367.4,"faixa":"diamante","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Myrvyn MacDermot","email":"mmacdermot3@phpbb.com","cpf":"2648530061","endereco":"2211 Vera Avenue","data_de_aniversario":"1921-01-11","historico":833.74,"faixa":"ouro","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Kippy Borrington","email":"kborrington4@ifeng.com","cpf":"4382635144","endereco":"20 Londonderry Lane","data_de_aniversario":"1954-12-31","historico":391.8,"faixa":"diamante","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Ave Feavyour","email":"afeavyour5@zdnet.com","cpf":"3009460244","endereco":"27 Fieldstone Drive","data_de_aniversario":"1957-08-18","historico":932.63,"faixa":"diamante","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Krystyna Trenchard","email":"ktrenchard6@narod.ru","cpf":"6494200311","endereco":"52612 Boyd Crossing","data_de_aniversario":"1920-05-04","historico":202.24,"faixa":"prata","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Lorinda Grigson","email":"lgrigson7@networkadvertising.org","cpf":"4201732428","endereco":"47814 Hermina Hill","data_de_aniversario":"2000-10-18","historico":264.64,"faixa":"platina","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Gerry Wills","email":"gwills8@webeden.co.uk","cpf":"0490054595","endereco":"3 La Follette Drive","data_de_aniversario":"2022-02-04","historico":6.56,"faixa":"diamante","createdAt":new Date(),"updatedAt":new Date()},
      {"nome":"Patrizia Waye","email":"pwaye9@com.com","cpf":"2030609846","endereco":"5 Talmadge Street","data_de_aniversario":"1978-12-29","historico":119.5,"faixa":"diamante","createdAt":new Date(),"updatedAt":new Date()}]
 
      , {});
    // await queryInterface.changeColumn('Clientes', 'data_de_aniversario', {
    //   type: Sequelize.DATEONLY,
    //   allowNull: true
    // })
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Clientes', null, {});
      // await queryInterface.changeColumn('Clientes', 'data_de_aniversario', {
      //   type: Sequelize.DATE,
      //   allowNull: true
      // })

  }
};
