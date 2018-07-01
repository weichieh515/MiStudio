var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var examSchema = new Schema({
    type: String,
    title: String,
    time: Date,
    link:String
}, {
    collection: 'exam'
});

var Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;