var express = require('express');
var router = express.Router();
var fs = require('fs');

var Document = require('../../../schema/document.js');

var onesignal = require('./onesignal.js');

//create document
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
            onesignal.sendNotification("申請表:" + document.title, 'doc/' + document.link);
        };
    });
});
//update document
router.put('/:id', function (req, res, next) {
    var document = req.body

    Document.findOne({
        _id: req.params.id
    }, function (err, _document) {
        if (err) {
            res.send(err).status(404);
        } else {
            if (document.link == "") {
                document.link = _document.link
            }
            else {
                if (document.link != _document.link) {
                    deleteFile(_document.link);
                }
            }
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
        }
    });





});
//delete document
router.delete('/:id', function (req, res) {
    Document.findOne({
        _id: req.params.id
    }, function (err, document) {
        if (err) {
            res.send(err).status(404);
        } else {
            deleteFile(document.link);
            Document.findOneAndRemove({
                _id: req.params.id
            }, function (err, result) {
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
        }
    });

});

function deleteFile(fileName) {
    fs.unlink('public/\/doc/\/' + fileName, function (error) {
        if (error) {
            throw error;
        }
    });

}

module.exports = router;