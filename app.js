var express =	require('express'),
					load = require('express-load'),
					bodyParser = require('body-parser'),
					app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

load('controllers')
	.then('routes')
	.into(app);

var port = (process.env.PORT || 5000);

app.listen(port, function(){
	console.log('Online...');
});

module.exports = app;
