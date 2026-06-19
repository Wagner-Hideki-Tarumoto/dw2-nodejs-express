//ARQUIVO JS É O PRINCIPAL DO PROJETO

//IMPORTANDO OS MÓDULOS DO EXPRESS
const express = require("express");

//CRIANDO UMA INSTÂNCIA DO EXPRESS
const app = express();

//CONFIGURANDO O EJS
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
  const listaCliente = ["Maria", "João", "Pedro", "Silvia", "Tereza"];
    res.render("clientes", {
      listaCliente: listaCliente,
    });
});

app.get("/clientes/:cliente", function (req, res) {
  const cliente = req.params.cliente;
  res.render("detalhesCliente", {
    cliente: cliente,
  });
});


//ROTA DE PRODUTOS
app.get("/produtos", function (req, res) {
 // const produto = "";
  const listaProdutos = ["Computador", "Celular", "Tablet", "Notebook"];
  res.render("produtos", {
   
    //enviando variáveis para página html
    //produto: produto,
    listaProdutos: listaProdutos,
  });
  
});

//ROTA DE PRODUTOS COM PARÂMETRO
app.get("/produtos/:produto", function (req, res) {
  const produto = req.params.produto;
  res.render("detalhesproduto", {
    produto: produto,
  });
});

app.get("/servicos", function (req, res) {
  res.render("servicos");
});

//INICIANDO O SERVIDOR NA PORTA 8080
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
