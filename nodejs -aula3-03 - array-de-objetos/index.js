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
    //enviando variaveis para pagina html
    //produto: produto,
    listaProdutos: listaProdutos,
  });
  
});

//ROTA DE PRODUTOS COM PARAMETRO
app.get("/produtos/:produto", function (req, res) {
  const produto = req.params.produto;
  res.render("detalhesproduto", {
    produto: produto,
  });
});

app.get("/servicos", function (req, res) {

  //ARRAY DE OBJETOS
  const servicos = [
{servico: "Desenvolvimento de Websites", descricao: "Criacao de site com Node.js e integracao a banco de dados", preco: 3500},
{servico: "Auditoria de UX/UI", descricao: "Avaliacao da usabilidade de sistemas com sugestoes de melhoria", preco: 1800},
{servico:"Infrastrutura em Nuvem", descricao: "Configuracao de servidores e hospedagem de aplicacoes", preco: 2900},
{servico: "Chatbot com IA", descricao: "Desenvolvimento de chatbot para aatendimento automatico", preco: 2750},
  ]
  res.render("servicos",{
 //ENVIANDO ARRAY DE OBJETO PARA PAGINA
  servicos: servicos
});
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
