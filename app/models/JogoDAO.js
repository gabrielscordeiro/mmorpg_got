/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description JogoDAO
 */
function JogoDAO(connection) {
    this._connection = connection();
}

JogoDAO.prototype.gerarParametros = function(usuario){
    this._connection.open(function (err, mongoClient) {
        mongoClient.collection('jogo', function (error, collection) {
            collection.insert({
                usuario: usuario,
                moeda: 15,
                suditos: 10,
                temor: Math.floor((Math.random() * 1000)),
                sabedoria: Math.floor((Math.random() * 1000)),
                comercio: Math.floor((Math.random() * 1000)),
                magia: Math.floor((Math.random() * 1000))
            });

            mongoClient.close();
        });
    });
}

JogoDAO.prototype.iniciaJogo = function(usuario, res, casa){
    this._connection.open(function (err, mongoClient) {
        mongoClient.collection('jogo', function (error, collection) {
            //Como os dados vindo por paramêtro são os mesmos que será usado na query pode ser passado diretamente o JSON
            //o toArray recupera o cursor gerado pela função find e retorna dentro de um callback um array que pode ser usado dentro da aplicação
            collection.find({
                usuario: usuario
            }).toArray(function (err, result) {                
                res.render('jogo', {
                    img_casa: casa, 
                    jogo: result[0]
                });
            });

            mongoClient.close();
        });
    });
}

module.exports = function () {
    return JogoDAO;
}