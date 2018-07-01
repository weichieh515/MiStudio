var express = require('express');
var router = express.Router();

var Recruit = require('../../../schema/recruit.js');

var onesignal = require('./onesignal.js');

//create recruit
router.post('/', function (req, res, next) {
    var recruit = new Recruit(req.body);
    recruit.save(function (err, result) {
        if (err) {
            res.send({
                error_code: 1,
                err: err
            });
        } else {
            res.json({
                error_code: 0
            });
            onesignal.sendNotification("招生資訊:" + recruit.title, 'recruitments');
        };
    })
});
//update recruit
router.put('/:id', function (req, res, next) {
    var recruit = req.body
    Recruit.findOneAndUpdate({
        _id: req.params.id
    }, recruit, function (err, result) {
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
//delete recruit
router.delete('/:id', function (req, res) {
    Recruit.findOneAndRemove({
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
});

module.exports = router;