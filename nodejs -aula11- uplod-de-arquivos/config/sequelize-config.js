//importando o sequelize
import Sequelize from "sequelize";

//criando os dadois de conexaõ com o banco
const connection = new Sequelize({
    dialect:"mysql",
    host: "localhost",
    username: "root",
    password: "",
    //comente essa linha n aprimeira execução
    database: 'galeria',
    timezone: "-03:00"
});
export default connection;