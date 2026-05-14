//CONTROLLER DE USUARIO
import express, { request } from "express";
const router = express.Router();
//importando o model
import Usuario from "../models/Usuario.js";
//importando obcrypt (hash de senha)
import bcrypt from "bcrypt";
import { where } from "sequelize";

//rota de login
router.get("/login", function (req, res) {
  res.render("login", {
    messages: req.flash(),
  loggedOut:true,
  });
});


//rota logout
router.get("/logout", (req, res) => {
  //limpando a sessão
  req.session.usuario = undefined;
  res.redirect("/");

});

//roda de formulario de cadastro do usuario
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    //recebendo as messagens
    messages: req.flash(),
  loggedOut:true,
  });
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
      //enviando o alerta
      req.flash('danger', "O Usuario já esta cadastrado! Faça o Login.")
      res.redirect("/cadastro")

        // res.send(`Usuario já cadastrado!
        //     <br><a href="/login">Faça o login.</a>`);
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

              //enviando alerta de sucesso
              req.flash('success', 'login efetuado com sucesso!')
              res.redirect("/");

              //se a senha estiver incorreta
          } else {
          req.flash("danger", "Asenha informada esta inncorreta! Tente novamente.");
          res.redirect("/login");
        }
//se o usuario não existir
    
    }else {
        req.flash("danger", "O usuario informado não existe! Verifique os dados e tente novamente.");
        res.redirect("/login");
        
    }
})
})




//exportando  o modulo
export default router;
