var express = require('express');
var router = express.Router();
var multer = require('multer');
var dateFormat = require('dateformat');

var datetimestamp = dateFormat(Date.now(), "yyyy-mm-dd_h.MM.ss");


router.post('/exam', function (req, res) {
  exam(req, res, function (err) {
    if (err) {
      return res.json({
        error_code: 1,
        err_desc: err
      });
    }
    res.json({
      error_code: 0,
      err_desc: null,
      filelink: 'exam/' + req.file.filename
    });
  });
});

router.post('/doc', function (req, res) {
  doc(req, res, function (err) {
    if (err) {
      return res.json({
        error_code: 1,
        err_desc: err
      });
    }
    res.json({
      error_code: 0,
      err_desc: null,
      filelink: 'doc/' + req.file.filename
    });
  });
});

router.post('/course', function (req, res) {
  course(req, res, function (err) {
    if (err) {
      return res.json({
        error_code: 1,
        err_desc: err
      });
    }
    res.json({
      error_code: 0,
      err_desc: null,
      filelink: 'course/' + req.file.filename
    });
  });
});


var exam = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/doc/exam');
    },
    filename: function (req, file, cb) {
      var filetype = file.originalname.split('.').pop();
      var filename = file.originalname.split('.').slice(0, -1).join('.');
      cb(null, filename + '_' + datetimestamp + '.' + filetype);
    }
  })
}).single('file');


var doc = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/doc/doc');
    },
    filename: function (req, file, cb) {
      var filetype = file.originalname.split('.').pop();
      var filename = file.originalname.split('.').slice(0, -1).join('.');
      cb(null, filename + '_' + datetimestamp + '.' + filetype);
    }
  })
}).single('file');

var course = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/doc/course');
    },
    filename: function (req, file, cb) {
      var filetype = file.originalname.split('.').pop();
      var filename = file.originalname.split('.').slice(0, -1).join('.');
      cb(null, filename + '_' + datetimestamp + '.' + filetype);
    }
  })
}).single('file');


module.exports = router;