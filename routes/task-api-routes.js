const db = require("../models");

module.exports = function(app) {
    // Getting all of the users tasks for the calendar 
    app.get("/api/tasks/id", (req, res) => {
        db.Task.findAll({
            where: {
                UserId: req.session.user.id
            }
        }).then((userTasks) => {
            res.json(userTasks)
        })
    });

    // creating new task
    app.post("/api/tasks", (req, res) => {
        db.Task.create(req.body).then((newTask) => {
            res.json(newTask);
        })
    });

    // updating a task
    app.put("/api/tasks/:id", (req, res) => {
        db.Task.update({
                title: req.body.title,
                description: req.body.description,
                endDate: req.body.endDate,
                endTime: req.body.endTime,
                startDate: req.body.startDate,
                startTime: req.body.startTime,
                timeToComplete: req.body.timeToComplete,
                is_autoSchedule: req.body.is_autoSchedule,
                is_reoccurring: req.body.is_reoccurring,
                UserId: req.body.userId
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then((updatedTask) => {
                res.json(updatedTask);
            });
    });

    // deleting a task
    app.delete("/api/tasks/:id", (req, res) => {
        db.Task.destroy({
            where: {
                id: req.params.id
            }
        }).then((deletedTaskData) => {
            res.send("DELETED")
        })
    });

    app.put("/api/tasks", function(req, res) {
        db.Task.update({
                title: req.body.title,
                description: req.body.description,
                deadline: req.body.deadline,
                autoschedule: req.body.autoschedule,
                reoccuring: req.body.reoccuring,
                timeToComplete: req.body.length,
                startline: req.body.startline
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