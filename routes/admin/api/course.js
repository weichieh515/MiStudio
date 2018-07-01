var express = require('express');
var router = express.Router();

var Document = require('../../../schema/course.js');

var onesignal = require('./onesignal.js');

//create exam
router.post('/', function (req, res, next) {
    var document = new Document(req.body);
    document.save(function (err, result) {
       if (err) {
            res.send({
                error_code: 1,
                err: err
            });
        } else {
            res.json({
                error_code: 0
            });
            onesignal.sendNotification("修業規定:" + document.title, 'doc/' + document.link);
        };
    });
});
//update exam
router.put('/:id', function (req, res, next) {
    var document = req.body
    Document.findOneAndUpdate({
        _id: req.params.id
    }, document, function (err, result) {
         if (err) {
            res.send({
                error_code: 1,
                err: err
            });
        } else {
            res.json({
                error_code: 0
            });
        };
    });
});
//delete exam
router.delete('/:id', function(req, res) {
    Document.findOneAndRemove({
       _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.send({
                error_code: 1,
                err: err
            });
        } else {
            res.json({
                error_code: 0
            });
        }
    });
});

module.exports = router;