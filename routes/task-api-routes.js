var db = require("../models");

module.exports = function(app) {

    app.get("/api/tasks", function(req, res) {
        db.Task.findAll({}).then(function(tasks) {
            res.json(tasks)
        })
    })

    app.get("/api/tasks/:id", function(req, res) {
        db.Task.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(tasks) {
            res.json(tasks)
        })
    });

    app.post("/api/tasks", function(req, res) {
        db.Task.create(req.body).then(function(newTask) {
            // res.json(newTask);
            res.redirect("/dashboard");
        })
    });

    app.delete("/api/tasks/:id", function(req, res) {

        db.Task.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(delData) {
            res.send("DELETED")
        })
    });

    app.put("/api/tasks", function(req, res) {
        db.Task.update({
                text: req.body.text,
                complete: req.body.complete
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(function(tasks) {
                res.json(tasks);
            });
    });
}