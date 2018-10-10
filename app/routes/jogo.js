/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description jogo route
 **/

module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.JogoController.jogo(application, req, res);		
	});
}