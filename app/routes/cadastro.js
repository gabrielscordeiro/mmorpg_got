/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description cadastro route
 */

module.exports = function (application) {
	application.get('/cadastro', function (req, res) {
		application.app.controllers.CadastroController.cadastro(application, req, res);
	});
}