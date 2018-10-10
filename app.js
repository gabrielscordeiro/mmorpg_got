/**
 * @author Gabriel Schmidt Cordeiro <gabrielscordeiro2012@gmail.com>
 * @description App
 */

/* importar as configurações do servidor */
var app = require('./config/server');
const PORT = process.env.PORT || 5000

/* parametrizar a porta de escuta */
app.listen(PORT, function(){
	console.log(`Server On - http://localhost:${PORT}/`);
});