const db = require("../models");
require("dotenv").config();

module.exports = function(app) {
    // required 
    const session = require('express-session');
    const bcrypt = require('bcrypt');

    // setting up session
    // app.set('trust proxy', 1) //trust first proxy
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            // secure: true,
            maxAge: 2 * 60 * 60 * 1000

        }
    }));

    // Signup === Create new user
    app.post("/signup", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser)
        }).catch(err => {
            console.log(err);
            res.status(500);
        });
    });

    // Login
    app.post("/login", (req, res) => {
        db.User.findOne({
            where: { username: req.body.username },
        }).then(user => {
            // checking to make sure user exists
            if (!user) {
                req.session.destroy()
                return res.status(401).send("Incorrect Username");
            }
            // checking user password
            else if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = {
                    username: user.username,
                    id: user.id
                }
                return res.status(200).json("login ok");
            } else {
                req.session.destroy;
                return res.status(401).send("Incorrect Username or Password");
            }

        })

    })

    // Log out
    app.get("/logout", (req, res) => {
        req.session.destroy();
        res.render("login");
    })

    // session homepage aka users dashboard
    app.get("/dashboard", (req, res) => {
        if (req.session.user) {
            db.User.findOne({
                where: {
                    id: req.session.user.id
                },
                include: [db.Task]
            }).then(function(dbUser) {
                const userObj = dbUser.toJSON();
                    
                    res.render("index", userObj);

            });
        } else {
            res.render("login");
        }
    })
}