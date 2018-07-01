var express = require('express');
var router = express.Router();

var News = require('../../../schema/news.js');

router.get('/:id', function (req, res, next) {
    News.findOne({
        _id: req.params.id
    }, function (err, news) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(news).status(200);
        }
    });
});

router.get('/list/:type', function (req, res, next) {
    News.find({
        type: req.params.type
    }).sort({
        _id:-1
    }).exec(function(err,news){
        if(err){res.send(err).status(404);}
        else{res.json(news).status(200);}
    })
});

// router.get('/list/dept', function (req, res, next) {
//     News.find({
//         type:'dept'
//     }).sort({
//         _id:-1
//     }).exec(function(err,news){
//         if(err){res.send(err).status(404);}
//         else{res.json(news).status(200);}
//     })
// });

// router.get('/list/activity', function (req, res, next) {
//     News.find({
//         type:'activity'
//     }).sort({
//         _id:-1
//     }).exec(function(err,news){
//         if(err){res.send(err).status(404);}
//         else{res.json(news).status(200);}
//     });
// });

// router.get('/list/speech', function (req, res, next) {
//     News.find({
//         type:'speech'
//     }).sort({
//         _id:-1
//     }).exec(function(err,news){
//         if(err){res.send(err).status(404);}
//         else{res.json(news).status(200);}
//     });
// });

// router.get('/list/other', function (req, res, next) {
//     News.find({
//         type:'activity'
//     }).sort({
//         _id:-1
//     }).exec(function(err,news){
//         if(err){res.send(err).status(404);}
//         else{res.json(news).status(200);}
//     });
// });

// router.get('/list/masterexam',function(req,res,next){
//     News.find({
//         type:'masterexam'
//     }).sort({
//         _id:-1
//     }).exec(function(err,news){
//         if(err){res.send(err).status(404);}
//         else{res.json(news).status(200);}
//     });
// })

// router.get('/list/phdexam',function(req,res,next){
//     News.find({
//         type:'phdexam'
//     }).sort({
//         _id:-1
//     }).exec(function(err,news){
//         if(err){res.send(err).status(404);}
//         else{res.json(news).status(200);}
//     });
// })

module.exports = router;



