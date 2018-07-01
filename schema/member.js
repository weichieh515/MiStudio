var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memberSchema = new Schema({
    type: String,
    imgUrl: String,
    name: String,
    title: String,
    experts: String,
    education: String,
    office: String,
    exts: String,
    email: String,
    order: Number,
    page: String
}, {
        collection: 'member'
    });

var Member = mongoose.model('Member', memberSchema);

module.exports = Member;