// server.js
// load the things we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static('resources'));
app.get('/', function(req, res) {
    res.render('pages/index');
});
app.listen(port);
console.log('8080 Marina is a translator!');