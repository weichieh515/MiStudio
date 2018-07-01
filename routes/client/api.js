var express = require('express'),
    mongojs = require('mongojs'),
    path = require('path'),
    config = require('config'),
    router = express.Router();

var News = require('../../schema/news.js'),
    Member = require('../../schema/member.js'),
    Recruit = require('../../schema/recruit.js'),
    Document = require('../../schema/document.js'),
    Course = require('../../schema/course.js'),
    Exam = require('../../schema/exam.js'),
    Maillist = require('../../schema/maillist.js');

var master_oralexam = [{
    student: 'student',
    thesis: 'thesis',
    adviser: 'adviser',
    oral_member: 'oral_member',
    date: 'date',
    time: 'time',
    location: 'location'
}];


router.get('/member/:id', function (req, res, next) {
    Member.findOne({
        _id: req.params.id
    }, function (err, member) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(member).status(200);
        }
    });
});

router.get('/members', function (req, res, next) {
    Member.find({}, function (err, members) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(members).status(200);
        }
    }).sort({ order: 1 });
});

router.get('/recruits', function (req, res, next) {
    Recruit.find({}, function (err, recruits) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(recruits).status(200);
        }
    });
});

router.get('/recruit/:id', function (req, res, next) {
    Recruit.findOne({
        _id: req.params.id
    }, function (err, recruit) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(recruit).status(200);
        }
    });
});


router.get('/master_oralexam', function (req, res, next) {
    res.json(master_oralexam);
});

router.get('/document', function (req, res, next) {
    Document.find({}, function (err, document) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(document).status(200);
        }
    });
});
router.get('/document/:id', function (req, res, next) {
    Document.findOne({
        _id: req.params.id
    }, function (err, document) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(document).status(200);
        }
    });
});

router.get('/course', function (req, res, next) {
    Course.find({}, function (err, course) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(course).status(200);
        }
    });
});
router.get('/course/:id', function (req, res, next) {
    Course.findOne({
        _id: req.params.id
    }, function (err, course) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(course).status(200);
        }
    });
});

router.get('/exam', function (req, res, next) {
    Exam.find({}, function (err, exam) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(exam).status(200);
        }
    });
});
router.get('/exam/:id', function (req, res, next) {
    Exam.findOne({
        _id: req.params.id
    }, function (err, exam) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(exam).status(200);
        }
    });
});

router.get('/maillist', function (req, res, next) {
    Maillist.find({}, function (err, maillist) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(maillist).status(200);
        }
    });
})

router.get('/oneSignalAppID', function (req, res, next) {
    res.send(config.get('oneSignal.appID'))
})





module.exports = router;