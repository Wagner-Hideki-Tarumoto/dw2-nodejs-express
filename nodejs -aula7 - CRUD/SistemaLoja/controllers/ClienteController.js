//Forma de importar Commonjs (antigo
//const express = requee ("express")

//Importanto o Express com ES6 Modules (nova)
import express from "express";
//Metodo do Express usado para cirar as rotas da aplicacao
const router = express.Router();

//Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // const clientes = [
  // {nome: "Ana Silva", cpf: "123.456.789-00", endereco: "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678"},
  // {nome: "Pedro Almeida", cpf: "987.654.321-00", endereco: "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432"},
  // {nome: "Marina Oliveira", cpf: "456.789.123-00", endereco: "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987"},
  // {nome: "Rafael Santos", cpf: "321.654.987-00", endereco: "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321"}
  // ]//
  //Aqui iremos chamar o model "Clientes", invocar o métodos findAll() para buscar todos sos registros da tabela de cliente
  Cliente.findAll().then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    }).catch((error) => {
      console.log("Ocorreu um erro ao buscar os clientes." + error);
    });
});

//ROTA DE CADDASTRO DE CLINETE (subrota/cadastrar)
router.post("/clientes/cadastrar", (req, res) => {
//criando as variaveis que irao armazenar os dados vondo do formulario
const nome = req.body.nome;
const cpf = req.body.cpf
const endereco = req.body.endereco
//Sea promessa for bem sucedida o usuario sera redirecionado para  a pagina de clinetes
//Enviando os dados para o banco
//O metodo create cadastra informaçoes no BD
Cliente.create({
//coluna //variavel
nome: nome,
cpf: cpf,
endereco: endereco
}).then(()=>{
    res.redirect("/clientes")

}).catch(error=>{
    //falha da promessa
    console.log("Ocorreu um erro ao cadastrar o cliente." + error)
});
})



//exportando o modulo para usar em outro arquivo
export default router;
