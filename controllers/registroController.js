const Sequelize = require("sequelize");
const configDB = require("./configs/database");

const bcrypt = require('bcrypt')

const conexao = new Sequelize(configDB);



const resultado = conexao
  .query(
    `INSERT INTO produto (name, username, password, email) VALUES(:nome, 'teste', 1, 'teste', 1, 100, 3.5 )`,
    {
      type: Sequelize.QueryTypes.UPDA,
      replacements: {
        nome: nomeProduto,
      },
    }
  )
  .then((resultadoConsulta) => {
    console.log(resultadoConsulta);
  });

const registroController = {
    // viewLogin: (req, res) => {
    //     return res.render('auth/login')
    // },
    create: (req, res) => {
        return res.render('auth/register')
    },
    store: (req, res) => {
        const {name, username, email, password} = req.body;

        password = bcrypt.hashSync(password, 10)

        //chamar o cadastrar

        const resultado = conexao
        .query(
            `INSERT INTO users (name, email, username, password) VALUES(:nome, :email, :username, :password)`,
            {
            type: Sequelize.QueryTypes.UPDA,
            replacements: {
                name: name,
                email: email,
                username: username,
                password: password
            },
            }
        )
        .then((resultadoConsulta) => {
            console.log(resultadoConsulta);
        });
    }

}

module.exports = registroController
