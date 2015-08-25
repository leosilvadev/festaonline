var express =	require('express'),
					load = require('express-load'),
					bodyParser = require('body-parser'),
					app = express();

app.use(bodyParser.json());

load('controllers')
	.then('routes')
	.into(app);

var port = (process.env.PORT || 5000);

app.listen(port, function(){
	console.log('Online...');
});

module.exports = app;
