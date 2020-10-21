var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;
// var allRoutes = require('./controllers')
var db = require('./models')

app.use(express.urlencoded({ extended: true }))
app.use(express.json)

app.get('/', function(req, res) {
    res.send("home page!")
})

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT http://localhost:' + PORT)
    })
})