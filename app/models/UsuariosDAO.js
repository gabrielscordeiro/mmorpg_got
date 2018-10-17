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

            mongoClient.close();
        });
    });
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
    this._connection.open(function(err, mongoClient){
        mongoClient.collection('usuarios', function(error, collection){            
            //Como os dados vindo por paramêtro são os mesmos que será usado na query pode ser passado diretamente o JSON
            //o toArray recupera o cursor gerado pela função find e retorna dentro de um callback um array que pode ser usado dentro da aplicação
            collection.find(usuario).toArray(function(err, result){

                //Cria as váriaveis de sessão
                if(result[0] != undefined){
                    req.session.autorizado = true;
                    req.session.usuario = result[0].usuario;
                    req.session.casa = result[0].casa;
                }

                if(req.session.autorizado){
                    res.redirect('jogo');
                }else{
                    res.render('index',{
                        validacao: {}
                    })
                }
            });

            mongoClient.close();
        });
    });
}

module.exports = function(){
    return UsuariosDAO;
}