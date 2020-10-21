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

//var routes = require("./routes/api-routes");
//app.use(routes);
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT http://localhost:' + PORT)
    })
})