var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var documentSchema = new Schema({
    type: String,
    title: String,
    time: Date,
    link: String
}, {
    collection: 'document'
});

var Document = mongoose.model('Document', documentSchema);

module.exports = Document;