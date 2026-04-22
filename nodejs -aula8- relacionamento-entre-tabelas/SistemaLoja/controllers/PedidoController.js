//Importanto o Express com ES6 Modules (nova)
import express from "express"
//Metodo do Express usado para cirar as rotas da aplicacao
const router = express.Router()
//Importando o model pedido
import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";
// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
   //FAZENDO iNNER JOIN para trazer as informações ddo cliente junto com aas informações do pedido
   Pedido.findAll({
    include: [
        {
            model: Cliente, //Inclui o modelo Cliente relacionadlo
            required: true, //Garante que somente pedido com clientes relacionados sejam retornado
        }
    ]
   }).then(pedidos => {
    console.log(pedidos)
    res.render("pedidos",{
        //passando a lista de pedidos paara a pagina
        pedidos : pedidos
    })
   }).catch(error =>{
    console.log(`Ocorreu um erro ao listar os pedidos. ${error}`)
   });
   
    });


export default router;
