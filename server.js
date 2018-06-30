var mongoose = require('mongoose');
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
require('dotenv').config();

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
  console.log('Req made');
  next();
});

var router = express.Router();

//get lastest replays, new replay
router.route('/')
    .get(function(req, res) {
        return res.send("YO DAWG");
    });

//use router
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);