var express = require('express');
var fileUpload = require('express-fileupload');
var router = express.Router();
var dateFormat = require('dateformat');

router.use(fileUpload());



router.post('/', function (req, res) {

  if (!req.files) {
    res.send('No files were uploaded.');
    return;
  }

  var file = req.files.upload;
  var filetype = file.name.split('.').pop();
  var filename = file.name.split('.').slice(0, -1).join('.');

  var datetimestamp = dateFormat(Date.now(), "yyyy-mm-dd_h.MM.ss");

  var filename = filename + '_' + datetimestamp + '.' + filetype;

  file.mv(`./public/wysiwyg/${filename}`, function (err) {
    if (err) {
      res.status(500).send('error' + err);
    } else {
      res.send(`
      <script type="text/javascript">
        window.parent.CKEDITOR.tools.callFunction(1, '\/wysiwyg\/${filename}', "");
      </script>`);
    }
  });
});



module.exports = router;