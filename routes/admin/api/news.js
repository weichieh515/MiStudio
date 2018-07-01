var express = require('express');
var router = express.Router();

var News = require('../../../schema/news.js');

var onesignal = require('./onesignal.js');
var mailer = require('./mailer.js');

//create news
router.post('/', function (req, res, next) {
    var news = new News(req.body);
    news.save(function (err, result) {
        if (err) {
            res.send({
                error_code: 1,
                err: err
            });
        } else {
            if (news.mail) {
                console.log('sending mail....')
                var mail = {
                    publisher: news.publisher,
                    subject: "公告:" + news.title,
                    html: news.content,
                    link: `news/${news._id}`
                }
                mailer(mail, (err) => {
                    if (err) {
                        res.send({
                            error_code: 1,
                            err: err
                        });
                        return false;
                    }                
                });
            }
            res.json({
                error_code: 0
            });            
            onesignal.sendNotification("公告:" + news.title, 'news/' + news._id);
        };
    });
});
//update news
router.put('/:id', function (req, res, next) {
    var news = req.body
    News.findOneAndUpdate({
        _id: req.params.id
    }, news, function (err, result) {
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
//delete news
router.delete('/:id', function (req, res) {
    News.findOneAndRemove({
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
        };
    });
});


module.exports = router;