var db = require("../models");
module.exports = function(app) {

    app.get('/', function(req, res) {

        res.render("login");

    })

    // app.get('', function(req, res) {

    //     res.render("login");

    // })
    // app.get('/tasklist', function(req, res) {

    //     res.render("tasklist");

    // })


}