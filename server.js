var express = require('express')
var app = express()
var bodyParser = require('body-parser');
let server = require('http').Server(app);

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

var expshdl = require('express-handlebars');
app.engine('handlebars', expshdl({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// router.get('/*', function (req, res) {
//   res.redirect('/');
// });
process.on('uncaughtException', function (err) {
  console.log(err);
});



server.listen(PORT, function() {
  console.log("App is running on port " + PORT);
});




    