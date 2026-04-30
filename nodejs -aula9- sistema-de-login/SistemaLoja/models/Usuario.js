import Sequelize from "sequelize"
import connection from "../config/sequelize-config.js"

//CRIANDO MODEL DE USUARIO
const Usuario = connection.define('usuarios', {
    email: {
        type: Sequelize.STRING,    
        allowNull: false,

    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Usuario.sync({force: false});

export default Usuario;

