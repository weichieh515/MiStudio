var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var newsSchema = new Schema({
  type: String,
  subType: String,
  publisher: String,
  title: String,
  content: String,
  time: Date,
  updateTime: Date,
  mail: Boolean
}, {
    collection: 'news'
  });

newsSchema.pre('save', function (next) {
  if (this.type != "masterexam") {
    this.subType == null;
  }
  this.time = new Date();
  next();
});

newsSchema.pre('findOneAndUpdate', function () {
  if (this.type != "masterexam") {
    this.subType == null;
  }
  this.update({}, {
    $set: {
      updateTime: new Date()
    }
  });
});

var News = mongoose.model('News', newsSchema);

module.exports = News;