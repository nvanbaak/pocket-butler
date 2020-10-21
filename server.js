var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;
// var allRoutes = require('./controllers')
var db = require('./models')

app.use(express.urlencoded({ extended: true }))
app.use(express.json)

//importing handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get('/', function(req, res) {
    res.send("home page!")
})

//var routes = require("./routes/api-routes");


var htmlRoutes = require("./routes/html-routes.js");
var taskRoutes = require("./routes/task-api-routes.js");
var userRoutes = require("./routes/user-api-routes.js");

app.use(htmlRoutes);
app.use(taskRoutes);
app.use(userRoutes);


//db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT http://localhost:' + PORT)
    })
//})