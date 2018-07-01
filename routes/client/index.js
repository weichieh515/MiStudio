
//node_modules
var express = require('express'),
    router = express.Router(),
    path = require('path');

//route
var api = require('./api'),
    news = require('./api/news');

router.use('/api', api);
router.use('/api/news', news);

router.use(function (req, res) {
    res.render(path.join(__dirname, '../../public/angular/dist/index.html'));
});

module.exports = router;