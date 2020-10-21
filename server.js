var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;
// var allRoutes = require('./controllers')
var db = require('./models')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//importing handlebars




//var routes = require("./routes/api-routes");

app.get('/', function(req, res) {
    console.log("This finally works!")
    res.send("home page!")

})
require("./routes/html-routes.js")(app);
require("./routes/task-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);



db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT http://localhost:' + PORT)
    })
 })