var express =	require('express'),
					load = require('express-load'),
					bodyParser = require('body-parser'),
					app = express();

app.use(bodyParser.json());

load('controllers')
	.then('routes')
	.into(app);

app.listen(3000, function(){
	console.log('Online...');
});

module.exports = app;
