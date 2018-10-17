/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description index route
 */

module.exports = function (application) {
	application.get('/', function (req, res) {
		application.app.controllers.IndexController.index(application, req, res);
	});

	application.post('/autenticar', function (req, res) {
		application.app.controllers.IndexController.autenticar(application, req, res);
	});
}