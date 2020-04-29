const Sequelize = require("sequelize");
const configDB = require("./configs/dataBase");

const conexao = new Sequelize(configDB);
//veio do formulario
const nomeProduto = "(DROP TABLE PRODUTOS)";
const resultado = conexao
        .query(
            `INSERT INTO users (name, email, username, password) VALUES('Ana', 'joao@email', 'anajoao', '12345678')`,
            {
              type: Sequelize.QueryTypes.UPDA,
            }
        )
        .then((resultadoConsulta) => {
            console.log(resultadoConsulta);
        });

