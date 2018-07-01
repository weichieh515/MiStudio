var express = require('express');
var router = express.Router();
var multer = require('multer');
var dateFormat = require('dateformat');

var datetimestamp = dateFormat(Date.now(), "yyyy-mm-dd_h.MM.ss");



var member = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/member');
    },
    filename: function (req, file, cb) {
      var filetype = file.originalname.split('.').pop();
      var filename = file.originalname.split('.').slice(0, -1).join('.');
      cb(null, filename + '_' + datetimestamp + '.' + filetype);
    }
  })
}).single('file');

//
router.post('/member', function (req, res) {
  member(req, res, function (err) {
    if (err) {
      return res.json({
        error_code: 1,
        err_desc: err
      });
    }
    res.json({
      error_code: 0,
      err_desc: null,
      filename: req.file.filename
    });
  });
});




module.exports = router;