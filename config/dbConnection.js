/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description dbConnection
 */

/* Importar o mongoDB */

const mongo = require('mongodb');

var connMongoDB = function () {
    let db = new mongo.Db(
        'got',//nome do banco
        new mongo.Server(
            'localhost',//string contendo o endereço do servidor
            27017, //porta de conexão
            {} //objeto com opções de configuração do servidor
        ),
        {}//objeto com opções de configuração do servidor
    );

    return db;
}

module.exports = function () {
    return connMongoDB;
}