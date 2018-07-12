var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    id: String,
    likes: Number,
    categories: [String],
    tags: [String],
    username: String,
    picture: String
});

module.exports = mongoose.model('User', UserSchema);