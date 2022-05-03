Olá! Neste desafio foi criado uma API REST, para uma livraria

                            Livraria 






## 📘 Pré-requisitos

-Node.Js - v. 16.13.2
-NPM - v. 8.1.2
-Express - v. 4.17.3
-Nodemon - v. 2.0.15
-Supertest - v. 6.2.2
-cors-
-Mongoose-


 Iniciando da aplicação

	Rode os comandos a seguir no terminal ou PoweShell:

	 - Clone o repositório: https://github.com/camimonteiro/Project_API_Bookstore
	 -- Instale os pacotes necessários:
	 -- Acesse a pasta Fluxo de caixas: 

npm install

- Popule o banco de dados:

npm run populate

- Inicie o servidor:

npm run start

Ao iniciar o projeto, o servidor será aberto em http://localhost:8000/, sendo 8000 a porta padrão. 
Caso necessário, a porta poderá ser alterada no arquivo server.js</p>







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

[✔] Cadastros de vendas
[✔] Listagems de vendas
[✔] Listagem de vendas por idVendas
[✔] Alteração de vendas por idVendas
[✔] Remoção de vendas por idVendas

[✔] Cadastros de aluguel
[✔] Listagems de aluguel
[✔] Listagem de aluguel por idAluguel
[✔] Alteração de aluguel por idAluguel
[✔] Remoção de aluguel por idAluguel

[✔] Cadastros de produtos no estoque
[✔] Listagems de produtos no estoque
[✔] Listagem de produtos por idEstoque
[✔] Alteração de produtos por idEstoque
[✔] Remoção de produtos por idEstoque

👉🏿 Rotas da aplicação para uma Venda

PPOST /venda/cadastrar?categoria=1: A rota deve receber os atributos no corpo da requisição.

GET /venda/1: Rota que lista uma venda pelo seu id.

GET /venda: Rota que lista todos as vendas, certifique-se de que todos os atributos estarão na resposta.

PUT /venda/:id: Rota que altera o venda, pelo ID definido.

DELETE /venda/:id: A rota deve deletar a venda com o id de uma venda presente nos parâmetros da rota.



👉🏿 Rotas da aplicação para um Aluguel

POST /aluguel/cadastrar?categoria=1: A rota deve receber os atributos no corpo da requisição.

GET /aluguel/1: Rota que lista um aluguel pelo seu id.

GET /aluguel: Rota que lista todos os alugueis, certifique-se de que todos os atributos estarão na resposta.

PUT /aluguel/:id: Rota que altera o alugue, pelo ID definido.

DELETE /aluguel/:id: A rota deve deletar o aluguel com o id de um aluguel presente nos parâmetros da rota.



👉🏿 Rotas da aplicação para um Estoque

POST /Estoque/cadastrar?categoria=1: A rota deve receber os atributos no corpo da requisição.

GET /Estoque/1: Rota que lista um Produto do estoque pelo seu id.

GET /Estoque: Rota que lista todos os produtos do estoque, certifique-se de que todos os atributos estarão na resposta.

PUT /Estoque/:id: Rota que altera os produtos do estoque, pelo ID definido.

DELETE /Estoque/:id: A rota deve deletar os produtos com o id de um produto presente nos parâmetros da rota.






