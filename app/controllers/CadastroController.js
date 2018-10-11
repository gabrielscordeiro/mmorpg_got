/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description CadastroController
 */

module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {
        validacao: {},
        dadosForm: {}
    });
}

module.exports.cadastrar = function (application, req, res) {
    let dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    let error = req.validationErrors();

    if (error) {
        res.render('cadastro', {
            validacao: error,
            dadosForm: dadosForm
        });

        return;
    }

    let connection = application.config.dbConnection;
    let UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);

    res.send('Podemos continuar');
}