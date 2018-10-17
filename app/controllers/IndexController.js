/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description IndexController
 */

module.exports.index = function (application, req, res) {
    if (req.session.autorizado) {
        res.render('jogo');
    } else {
        res.render('index', {
            validacao: {}
        });
    }
}

module.exports.autenticar = function (application, req, res) {
    if (req.session.autorizado) {
        res.render('jogo');
    } else {
        var dadosForm = req.body;

        req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
        req.assert('senha', 'Senha não pode ser vazia').notEmpty();

        var erros = req.validationErrors();

        if (erros) {
            res.render('index', {
                validacao: erros
            });
            return;
        }

        var connection = application.config.dbConnection;
        var usuariosDAO = new application.app.models.UsuariosDAO(connection);

        usuariosDAO.autenticar(dadosForm, req, res);

        //res.send('Tudo ok para criar a sessão');
    }
}