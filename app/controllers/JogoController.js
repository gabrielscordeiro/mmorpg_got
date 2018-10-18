/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description JogoController
 */

module.exports.jogo = function (application, req, res) {
    if (req.session.autorizado == false) {
        res.send('Usuário precisa fazer o login');
        return;        
    }

    let usuario = req.session.usuario;
    let casa = req.session.casa;
    let connection = application.config.dbConnection;
    let JogoDAO = new application.app.models.JogoDAO(connection);

    JogoDAO.iniciaJogo(usuario, res, casa);
}

module.exports.sair = function (application, req, res) {
    req.session.destroy(function(err){
        res.render('index', {
            validacao: {}
        })
    });
}