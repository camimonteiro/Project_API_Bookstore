const bd = require('../infra/sqlite-db');
const Livro = require ('../model/livros.model');
const LivroDAO = require ('../DAO/livro.dao');

const livro = (app, bd) => {
  const InstLivroDAO = new LivroDAO (bd)
   
  // verbo POST (CRUD = CREATE)
  app.post('/livro', (req, resp) => {
    const body = req.body;
    const newLivro = new Livro (body.titulo, body.autor, body.sinopse, body.categoria, body.edicao, body.qtdPaginas, body.id_FK_Fornecedores, body.nome_FK_Fornecedores, body.preco, body.ISBN, body.avaliacao);
    const data = async() => {
      try {
        const livros = await InstLivroDAO.inserirLivros(newLivro)
        resp.send(livros)
      } catch (error) {
        resp.send(error)
      }
    }
    data()
  })

  // verbo GET (CRUD = READ)
  app.get('/livro', (req, resp) => {
    const data = async() => {
      try {
        const livros = await InstLivroDAO.listarLivros();
        resp.send(livros)
      } catch (error) {
        resp.send(error)
      }
    }
    data()
  })

  // verbo GET (CRUD = READ) com filtro pelo ID
  app.get('/livro/:id', (req, resp) => {
    const data = async() => {
      try {
        const livros = await InstLivroDAO.listarLivrosID(req.params.id);
        resp.send(livros)
      } catch (error) {
        resp.send (error)
      }
    }
    data()
  })

  // verbo PUT (CRUD = UPDATE)
  app.put('/livro/:id', (req, resp) => {
    const body = req.body;
    const id = req.params.id;
    const parametros = [body.titulo, body.autor, body.sinopse, body.categoria, body.edicao, body.qtdPaginas, body.id_FK_Fornecedores, body.nome_FK_Fornecedores, body.preco, body.ISBN, body.avaliacao, id]
    const data = async() => {
      try {
        const livros = await InstLivroDAO.changeLivros(parametros);
        resp.send(livros)
      } catch (error) {
        resp.send(error)
      }
    }
    data()
  })

  // verbo DELETE (CRUD = DELETE)
  app.delete('/livro/:id', (req, resp) => {
    const data = async() => {
      try {
        const livros = await InstLivroDAO.deleteLivros(req.params.id);
        resp.send(livros)
      } catch (error) {
        resp.send(error)
      }
    }
    data()
  })
    
    
}

module.exports = livro;