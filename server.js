var express = require('express')
var app = express()
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var expshdl = require('express-handlebars');
app.engine('handlebars', expshdl({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');
app.use('/', router);



app.listen(PORT, function() 
{
  console.log("App connected on " + PORT);
});


    