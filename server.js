var mongoose = require('mongoose');
var express    = require('express');    
var app        = express();           
var bodyParser = require('body-parser');
require('dotenv').config();

var User = require('./schemas/user');

//connect to our mongoDB
mongoose.connect(process.env.DB_URI);

//port setup
var port;
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    port = process.env.PORT || config.serverPort;
} else {
    port = 3001;
}

//allow CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

var router = express.Router();

//Login route
//params: fb id
router.route('/user')
    .get(function(req, res) {
        User.find({
        },function(err, users) {
            return res.json(users);
        }).sort({likes: -1}).limit(9);
    })
    .post(function(req, res) {
        User.findOne({
            id: req.body.id
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user == null) {
                return res.json({name: null})
            } else {
                user.success = true;
                res.json(user);
            }
        });
    });

router.route('/login')
    .post(function(req, res) {
        User.findOne({
            id: req.body.id
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user == null) {
                var newUser = new User();
                newUser.id = req.body.id;
                newUser.tags = [];
                newUser.students = [];
                newUser.description = "";
                newUser.categories = [];
                newUser.pic = req.body.pic;
                newUser.username = "";
                newUser.name = req.body.name;
                newUser.bio = "";
                newUser.likes = 10;
                newUser.save(function(err) {
                    if (err)
                        return res.send(err);
                    res.json(newUser);
                });
            } else {
                res.json(user);
            }
        });
    });
    
router.route('/user/update')
    .post(function(req, res) {
        User.findOne({
            id: req.body.id
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user != null) {
                user.username = req.body.username;
                user.bio = req.body.bio;
                user.tags = req.body.tags;
                user.categories = req.body.categories;
                user.description = req.body.description;
                user.save(function(err) {
                    if (err)
                        return res.send(err);
                    console.log(user);
                    res.json(user);
                });
            } else {
                res.send("OOOPS");
            }
        });
    });

//enroll user to another
router.route('/user/:id/add')
    .post(function(req, res) {
        User.findOne({
            id: req.params.id
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user != null) {
                if (user.students.indexOf(req.body.id) < 0) {
                    user.students.push(req.body.id);
                    user.save(function(err) {
                        if (err)
                            return res.send(err);
                        res.json(user);
                    });
                } else {
                    res.send("Already a student"); 
                }
            } else {
                res.send("OOOPS");  
            }
        });
    });

router.route('/user/:id/like')
    .get(function(req, res) {
        User.findOne({
            id: req.params.id
        },function(err, user) {
            if (err)
                return res.send(err);
            if (user != null) {
                user.likes += 1;
                user.save( err => {
                    if (err)
                        return res.send(err)
                    else
                        return res.json("Success");
                });
            } else {
                res.send("User not found");
            }
        });
    });

//Search by tag
//params: tag
router.route('/user/search/:category/:tag')
    .get(function(req, res) {
        if (req.params.category == "All") {
            User.find({
                tags: req.params.tag,
            },function(err, users) {
                return res.json(users);
            }).limit(15);
        } else {
            User.find({
                categories: req.params.category,
                tags: req.params.tag
            },function(err, users) {
                return res.json(users);
            }).limit(15);
        }
    });

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);