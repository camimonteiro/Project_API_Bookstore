const bd = require('../infra/sqlite-db');
const Livro = require ('../model/livros.model');
const LivroDAO = require ('../DAO/livro.dao');

const livro = (app, bd) => {
  const InstLivroDAO = new LivroDAO (bd) 
    
  // verbo GET
  app.get('/livro', function(req, resp) {
    InstLivroDAO.listarLivros()
    .then((answer)=>{
      resp.json(answer)
    }).catch((error)=>{
      resp.json(error)
    })
  })
    
  // verbo POST
  app.post('/livro', function(req, resp) {
    InstLivroDAO.inserirLivros()
    .then((answer)=>{
      resp.json(answer)
    }).catch((error)=>{
      resp.json(error)
    })
  })
      
    // // para filtrar pelos parâmetros (/user/:name/:....)
    // app.get('/user/:name/:lastName/:age/:email', function (req, resp) {
    //   resp.json({"name": req.params.name,
    //     "lastName": req.params.lastName,
    //     "age": req.params.age,
    //     "email": req.params.email
    //   })
    // })

    // app.post('/user/:name/:lastName/:age/:email', function (req, resp) {
    //   const name = req.params.name;
    //   const lastName = req.params.lastName;
    //   const age = req.params.age;
    //   const email = req.params.email;
    //   bd.user.push(req.params)
    //   resp.send(`O nome do usuário é ${name} ${lastName}. O usuário tem ${age} anos e seu e-mail é ${email}`)
    // })

    // // verbo DELETE
    // app.delete('/user/:name/:lastName', function (req, resp) {
    //   const nameParams = req.params.name;
    //   const lastNameParams = req.params.lastName;
    //   const indexUser = bd.user.findIndex(user => user.name == nameParams && user.lastName == lastNameParams);

    //   if(indexUser > -1){
    //     const userDeleted = bd.user.splice(indexUser, 1)
    //     resp.json({'UserDeleted': userDeleted})
    //   } else { 
    //     resp.json('User not find')
    //   }

    // })
    
    // // Método de UPDATE
    // app.put('/user/:name/:lastName', function (req, resp) {
    //   const nameParams = req.params.name;
    //   const lastNameParams = req.params.lastName;
    //   const body = req.body;
    //   const indexUser = bd.user.findIndex(user => user.name == nameParams && user.lastName == lastNameParams);

    //   if(indexUser > -1){
    //     const oldUserData = bd.user[indexUser];
    //     const newUserData = new User(
    //       body.name || oldUserData.name,
    //       body.lastName || oldUserData.lastName,
    //       body.age || oldUserData.age,
    //       body.email || oldUserData.email,
    //       body.password || oldUserData.password,
    //       oldUserData.id
    //       );
    //     const change = bd.user.splice(indexUser, 1, newUserData);

    //     resp.json({
    //       'UserChanged': newUserData,
    //       'UserDeleted': change
    //     })
    //   } else { 
    //     resp.json('User not find')
    //   }
    // })
}

module.exports = livro;