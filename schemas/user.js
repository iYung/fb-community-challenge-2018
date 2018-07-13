var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    id: String,
    likes: Number,
    //categories: [String],
    tags: [String],
    username: String,
    bio: String,
    pic: String
});

module.exports = mongoose.model('User', UserSchema);