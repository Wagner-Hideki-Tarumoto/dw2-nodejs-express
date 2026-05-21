import express from 'express';

//importando a blibliotexa multer
import multer from 'multer';
import connection from './config/sequelize-config.js';
import Galeria from './models/galeria.js';

const app = express();

//configurando a pasta public
app.use(express.static('public'))

//configurando o ejs
app.set('view engine', 'ejs')

//configurando o multer
const upload = multer({dest:"public/uploads/"})


//realizando a conexão
connection.authenticate().then(() => {
    console.log("Conexão com o banco realizada com sucesso!");

}).catch ((error) => {
    console.log(error);
});

//criando o banco de dados
connection.query("CREATE DATABASE IF NOT EXISTS galeria;").then(() => {
console.log("O banco de dados está criado");
}).catch(error => {
    console.log(error);
});



//rota principal
app.get("/", (req, res)=>{
    Galeria.findAll().then(imagens =>{
    res.render("index",{
    //enviando as imagens para a página
    imagens : imagens
    });
   }).catch(error =>{
        console.log(error);
    })
})

//rota de upload
app.post("/upload", upload.single("file"), (req, res) => {
    const file = req.file.filename
    Galeria.create({
        arquivo: file
    }).then(() => {
        res.redirect("/")
    }).catch(error => {
        console.log("não foi possivel gravar o arquivo no banco de dados!" + error)
    })
   
});


const port = 8081;

app.listen(port, (error)=>{
     if (error){
        console.log (`Ocorreu um erro ao iniciar o servidor! $(error}`);

    }else {
        console.log(`Servidor iniciado com sucesso em : http://localhost:${port}`);
    }
})
   
