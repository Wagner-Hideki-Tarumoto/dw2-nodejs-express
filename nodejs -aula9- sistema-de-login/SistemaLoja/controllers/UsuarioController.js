//CONTROLLER DE USUARIO
import express from "express";
const router = express.Router();
//importando o model
import Usuario from "../models/Usuario.js";
//importando obcrypt (hash de senha)
import bcrypt from "bcrypt";
import { where } from "sequelize";

//rota de login
router.get("/login", function (req, res) {
  res.render("login");
});


//roda de formulario de cadastro do usuario
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

//rota de criacao de usuario no banco
router.post("/caduser", (req, res) => {
  //coletando as informações do formulario
  const email = req.body.email;
  const senha = req.body.senha;

  //verificando se o usuario existe
  Usuario.findOne({where:{email:email}}).then(usuario =>{
    //senão houver usuario igual
    if(usuario ==undefined){
  //aqui sera feito o hash de senha
  //criando sal do hash
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(senha, salt)
  //enviando para o banco
  Usuario.create({
    email: email,
    senha: hash,
  }).then(() => {
      res.redirect("/login");
    }).catch((error) => {
      console.log("Não foi posssivel cadastrar o usuário." + error);
    });
    //se ja houver um usuario com mesmo email
    } else {
        res.send(`Usuario já cadastrado!
            <br><a href="/login">Faça o login.</a>`)
    }
  });

});

//rota de autenticação (login)
router.post("/autenticacao", (req, res)=>{
    // capturando os dados do formulario de login
const email = req.body.email
const senha = req.body.senha

//buscando o usuario no banco
Usuario.findOne({where: {email:email}}).then(usuario =>{
    //se o usuario existir
    if(usuario != undefined){
        //valida a senha
        const correct = bcrypt.compareSync(senha, usuario.senha);
        //se asenha for valida
        if(correct) {
            //autoriza o login
            //cria a sessão para o usuario
            req.session.usuario = {
                //inserindo as informações do usuario na sessão
                id: usuario.id,
                email: usuario.email
            }
            //res.send(`Sessão do Usuario criada com sucesso!<br>-ID do usuario logado: ${req.session.usuario['id']}<br>E-mail do usuario logado: ${req.session.usuario['email']}`)
            res.redirect("/");
            //se a senha tiver incorreta

        } else {
            res.send(`senha invalida!
                <br><a href="/login">Tente novamente.</a>`)
        }
//se o usuario não existir
    
    }else {
        res.send(`O usuario informado não existe!
         <br><a href="/login">Tente novamente.</a>`)
    }
})

})


//exportando  o modulo
export default router;
