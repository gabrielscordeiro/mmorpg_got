/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description UsuariosDAO
 */

function UsuariosDAO(connection) {
    this._connection = connection();//indica que a variavel faz parte do contexto da função que não deve ser usada fora do módulo. Executa a função passada como parametro
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.open(function(err, mongoClient){
        mongoClient.collection('usuarios', function(error, collection){
            collection.insert(usuario);
        });
    });
}

module.exports = function(){
    return UsuariosDAO;
}