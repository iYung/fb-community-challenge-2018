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
                newUser.username = "";
                newUser.likes = 0;
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
                user.save(function(err) {
                    if (err)
                        return res.send(err);
                    res.json(user);
                });
            } else {
                res.send("OOOPS");
            }
        });
    });

//Search by tag
//params: tag
router.route('/user/search/:tag')
    .get(function(req, res) {
        User.find({
            tags: req.params.tag
        },function(err, users) {
            return res.json(users);
        });
    });

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);