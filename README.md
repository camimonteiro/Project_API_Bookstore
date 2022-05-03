Olá! Neste desafio foi criado uma API REST, para uma livraria

                            Livraria 



<img src= "https://pbs.twimg.com/media/FR2tF3eXoAEgoBH?format=jpg&name=small">




## 📘 Pré-requisitos

-Node.Js - v. 16.13.2
-NPM - v. 8.1.2
-Express - v. 4.17.3
-Nodemon - v. 2.0.15
-Supertest - v. 6.2.2
-cors- v.2.8.5
-Mongoose- v. 6.3.1
-body-parser- v. 1.20.0",
-express"- v. 4.18.1",
-express-validator- v.2.20.8",
-fetch": v. 1.1.0",
-node-fetch": v.3.2.3",
-sqlite3- v.5.0.6"
 


 Iniciando da aplicação

	

	 - Clone o repositório: https://github.com/camimonteiro/Project_API_Bookstore
	 - Instale os pacotes necessários:

-Rode os comandos a seguir no terminal ou PoweShell:

        npm install

- Inicie o servidor:

        npm run start

Ao iniciar o projeto, o servidor será aberto em http://localhost:xxxx/, sendo xxxxxx a porta padrão. 
Caso necessário, a porta poderá ser alterada no arquivo server.js




Tecnologias utilizadas:

BACK END:
    Java Script
    Node JS

Banco de Dados
    Sequelize
    SQLITE
    MongoDB 

Ferramentas de testes
    Insomnia



Status do Desafio: Concluido ✔
Funcionalidades

[✔] Cadastro de categorias
[✔] Listagem de categorias
[✔] Listagem de categorias por idCategoria
[✔] Alteração de categorias por idCategoria
[✔] Remoção de categorias por idCategoria


👉 Rotas da aplicação para uma Venda

PPOST /categoria/cadastrar?categoria=1: A rota deve receber os atributos no corpo da requisição.

GET /categoria/1: Rota que lista uma categoria pelo seu id.

GET /categoria: Rota que lista todos as categorias, certifique-se de que todos os atributos estarão na resposta.

PUT /categoria/:id: Rota que altera o categoria, pelo ID definido.

DELETE /categoria/:id: A rota deve deletar a categoria com o id de uma categoria presente nos parâmetros da rota.






