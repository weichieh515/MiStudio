var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var courseSchema = new Schema({
    type: String,
    title: String,
    time: Date,
    link: String
}, {
    collection: 'course'
});

var Course = mongoose.model('Course', courseSchema);

module.exports = Course;