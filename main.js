var express = require('express');
var app = express()

app.get('/about', function(req, res) {
	res.send('Say Hello from Node');
});

app.listen(3000);

