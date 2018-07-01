//node_module
var express = require('express'),
    router = express.Router(),
    path = require('path'),
    compression = require('compression');

//route
var admin = require('./admin/index'),
    client = require('./client/index');

//config
const config = require('config'),
    sslPath = config.get('ssl.path');

router.use('/img', express.static(path.join(__dirname, '../public/img')));
router.use('/doc', express.static(path.join(__dirname, '../public/doc')));
router.use('/wysiwyg', express.static(path.join(__dirname, '../public/wysiwyg')));
router.use('/admin', express.static(path.join(__dirname, '../public/angular/dist-admin')), admin);

//SSL
router.use('/.well-known/acme-challenge/', express.static(path.join(__dirname, '../public/SSL', sslPath)));

//OneSignal
router.use('', express.static(path.join(__dirname, '../public/OneSignal')));

//main page has to be the last!!!!
router.use(express.static(path.join(__dirname, '../public/angular/dist')), client);

module.exports = router;