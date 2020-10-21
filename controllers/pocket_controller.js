var express = require("express");

var router = express.Router();


var db = require("../models/");


router.get("/", function(req, res) {
  
  res.send("Home page!");
});

//Get all the data from the Task database
router.get("/tasks", function(req, res) {

  db.Task.findAll()

    .then(function(dbTask) {
      console.log(dbTask);
      const dbTasksJson = dbTask.map(Task=>Task.toJSON());
      var hbsObject = { Task: dbTasksJson };
      return res.render("index", hbsObject);
    });
});

//Posts new Tasks to page
router.post("/tasks/create", function(req, res) {
  db.Task.create({
    text: req.body.text
  }).then(function(dbTask) {
      console.log(dbTask);
      res.redirect("/");
    });
});

//Updates the page if a Task has been completed
router.put("/tasks/update/:id", function(req, res) {
  db.Task.update({
    complete: true
  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then(function(dbTask) {
    res.json("updated");
  });
});

//exports the router
module.exports = router;
