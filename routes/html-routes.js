var db = require("../models");
module.exports = function(app) {
    // Load Login Page
    app.get('/', function(req, res) {
        res.render("login");
    });
}