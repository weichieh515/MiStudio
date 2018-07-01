var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var maillistSchema = new Schema({
    type: String,
    class: String,
    email: Array
}, {
    collection: 'maillist'
});

var Maillist = mongoose.model('maillist', maillistSchema);

module.exports = Maillist;