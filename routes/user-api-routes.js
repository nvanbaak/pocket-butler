const db = require("../models");

module.exports = function(app) {
    // update user
    app.put("/users/:id", (req, res) => {
        if (req.session.user) {
            db.User.findOne({
                where: {
                    id: req.params.id
                }
            }).then(user => {
                if (!user) {
                    return res.status(404).send('no such user')
                } else {
                    db.User.update({
                        username: req.body.username,
                        password: req.body.password,
                        email: req.body.email,
                        phone: req.body.phone
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(editUser => {
                        res.json(editUser)
                    });
                };
            });
        };
    });

    // delete user 
    app.delete("/users/:id", function(req, res) {
        db.User.destroy({
            where: { id: req.params.id }
        }).then(function(dbUser) {
            // console.log('deleted')
        });
    });
};