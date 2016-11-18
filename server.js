var express = require('express');
var webpack = require('webpack');

var webpackConfig = require('./webpack.development');

var app = express();


var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo:true,
	stats: {
		colors: true
	}
}));
app.use(require('webpack-hot-middleware')(compiler));


var port = process.env.PORT || 3001;

app.use(express.static(__dirname+'/'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "pal.html" );
})

app.get('/data', function(req, res) {
	var data = [
		{
			id: 1,
			name: 'pal',
			age: 21
		},
		{
			id: 2,
			name: 'pal2',
			age: 22
		}
	]
	data = JSON.stringify(data);
	res.send(data);
	res.end();
})

app.listen(port, function(err){
	if(err){
		throw err;
	}
	console.log('pal start : ' + port);
})