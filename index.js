var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var bars = exphbs({ 
	defaultLayout: 'main'
});

app.engine('handlebars', bars);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(require("path").join(__dirname, 'public')));

//static pages
var menu = require("./menu");
app.get('/', 	 (req, res) => res.render('home', menu(req) ));
app.get('/roles', 	 (req, res) => res.render('role', menu(req) ));
//CRUD handlers
var role = require("./controllers/role");
app.get('/role', role.getRole);
app.get('/role/:roleId', role.getById);
app.post('/role', role.addRole);
app.put('/role/:roleId', role.updateRole);
app.delete('/role/:roleId', role.deleteRole);

var user = require("./controllers/user");
app.get('/user', user.getUsers);
app.post('/user', user.addUser);
app.put('/user/:userId', user.updateUser);
app.delete('/user/:userId', user.deleteUser);

app.listen(3000);