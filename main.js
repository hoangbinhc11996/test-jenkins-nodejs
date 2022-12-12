var express = require('express');
var app = express()

app.get('/contact', function(req, res) {
	res.send('Say Hello from Node');
});

app.listen(3000);

