//arquivo js é o principal do projeto

//Importando o MÓDULOS do Express
const express = require("express");

//criando uma instancia do express
const app = express();

//configiurando o EJS
app.set("view engine", "ejs");

//CRIANDO A ROTA PRINCIPAL DO SITE ("/")
app.get("/", function (req, res) {
  //res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>");
  res.render("index");
});

//CRIANDO A ROTA DE PERFIL DE USUÁRIO
app.get("/perfil", function (req, res) {
  // res.send("<h2>Bem vindo ao seu perfil!</h2>");
  res.render("perfil");
});

app.get("/clientes", function (req, res) {
  res.render("clientes");
});

app.get("/produtos", function (req, res) {
  res.render("produtos");
});

app.get("/servicos", function (req, res) {
  res.render("servicos");
});

//Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (erro) => {
  if (erro) {
    console.log("Ocorreu um erro ao iniciar o servidor!" + erro);
  } else {
    console.log(
      `servidor iniciado com sucesso no endereco http://localhost:${port}`,
    );
  }
});
