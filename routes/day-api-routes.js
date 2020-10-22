// TODO: Not fully functioning, needs additional features

var db = require("../models");

module.exports = function (app) {

    app.get("/api/days", function (req, res) {
        db.Day.findAll({}).then(function (days) {
            res.json(days)
        })
    })

    app.get("/api/days/:id", function (req, res) {
        db.Day.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (days) {
            res.json(days)
        })
    });

    app.post("/api/days", function (req, res) {
        db.Day.create(req.body).then(function (newDay) {
            res.json(newDay)
        })
    });

    app.delete("/api/days/:id", function (req, res) {

        db.Day.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (delData) {
            res.send("DELETED")
        })
    });

    app.put("/api/days", function (req, res) {
        db.Day.update({
            text: req.body.text,
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        })
            .then(function (days) {
                res.json(days);
            });
    });
}