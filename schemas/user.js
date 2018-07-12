var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    likes: Number,
    categories: [String],
    tags: [String]
});

module.exports = mongoose.model('User', UserSchema);