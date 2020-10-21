var db = require("../models");

module.exports = function(app) {
  app.get("/api/weeks", function(req, res) {
    db.Week.findAll({
      include: [db.Day]
    }).then(function(dbWeek) {
      res.json(dbWeek);
    });
  });

  app.get("/api/weeks/:id", function(req, res) {
    db.Week.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Day]
    }).then(function(dbWeek) {
      res.json(dbWeek);
    });
  });

  app.post("/api/weeks", function(req, res) {
    db.Week.create(req.body).then(function(dbWeek) {
      res.json(dbWeek);
    });
  });

  app.delete("/api/weeks/:id", function(req, res) {
    db.Week.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWeek) {
      res.json(dbWeek);
    });
  });

};