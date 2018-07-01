var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recruitSchema = new Schema({
    type: String,
    title: String,
    content: String,
    time: Date
}, {
    collection: 'recruit'
});

recruitSchema.pre('save', function(next) {
  this.time = new Date();
  next();
});


recruitSchema.pre('findOneAndUpdate', function() {
  this.update({},{ $set: { time: new Date() } });
});

var Recruit = mongoose.model('Recruit', recruitSchema);

module.exports = Recruit;