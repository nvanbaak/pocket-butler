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
            res.json(newTask);
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
                title: req.body.title,
                description: req.body.description,
                deadline:req.body.deadline,
                autoschedule:req.body.autoschedule,
                reoccuring: req.body.reoccuring,
                timeToComplete: req.body.length,
                startline: req.body.startDate
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