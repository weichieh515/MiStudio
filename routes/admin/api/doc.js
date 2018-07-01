var express = require('express');
var router = express.Router();

var Doc = require('../../../schema/document.js');
var Exam = require('../../../schema/exam.js');
var Course = require('../../../schema/course.js');

//create
router.post('/doc',function(req, res, next){
    var doc = new Doc(req.body);
    doc.save(function (err, result) {
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
})

router.post('/exam',function(req,res,next){
    var exam = new Exam(req.body);
    exam.save(function (err, result) {
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
})

router.post('/course',function(req,res,next){
    var course = new Course(req.body);
    course.save(function (err, result) {
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
})

module.exports = router;