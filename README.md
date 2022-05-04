Olá! Neste desafio foi criado uma API REST, para uma livraria

                            Livraria Macabéa



<img src= "https://pbs.twimg.com/media/FR2tF3eXoAEgoBH?format=jpg&name=small">




## 📘 Pré-requisitos

-Node.Js - v. 16.13.2<br>
-NPM - v. 8.1.2<br>
-Express - v. 4.17.3<br>
-Nodemon - v. 2.0.15<br>
-Supertest - v. 6.2.2<br>
-cors- v.2.8.5<br>
-Mongoose- v. 6.3.1<br>
-body-parser- v. 1.20.0",<br>
-express"- v. 4.18.1",<br>
-express-validator- v.2.20.8",<br>
-fetch": v. 1.1.0",<br>
-node-fetch": v.3.2.3",<br>
-sqlite3- v.5.0.6"<br>
 


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

BACK END:<br>
    Java Script<br>
    Node JS<br>

Banco de Dados<br>
    Sequelize<br>
    SQLITE<br>
    MongoDB <br>

Ferramentas de testes<br>
    Insomnia<br>



Status do Desafio: Concluido ✔<br><br>
Funcionalidades

[✔] Cadastro de categorias.<br>
[✔] Listagem de categorias.<br>
[✔] Listagem de categorias por idCategoria.<br>
[✔] Alteração de categorias por idCategoria.<br>
[✔] Remoção de categorias por idCategoria.<br>

👉 Rotas da aplicação para uma Venda

PPOST /categoria/cadastrar?categoria=1: A rota deve receber os atributos no corpo da requisição.<br>

GET /categoria/1: Rota que lista uma categoria pelo seu id.<br>

GET /categoria: Rota que lista todos as categorias, certifique-se de que todos os atributos estarão na resposta.<br>

PUT /categoria/:id: Rota que altera o categoria, pelo ID definido.<br>

DELETE /categoria/:id: A rota deve deletar a categoria com o id de uma categoria presente nos parâmetros da rota.<br>






