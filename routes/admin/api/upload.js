var express = require('express');
var router = express.Router();
var path = require('path');


var img = require('./upload/img');
var doc = require('./upload/doc');

router.use('/img', img);
router.use('/doc', doc);

module.exports = router;