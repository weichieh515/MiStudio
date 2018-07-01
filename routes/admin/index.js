var express = require('express');
var router = express.Router();
var path = require('path');

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');


var news = require('./api/news');
var member = require('./api/member');
var recruit = require('./api/recruit');
var upload = require('./api/upload');
var wysiwyg = require('./api/wysiwyg');
var mailer = require('./api/mailer');
var document = require('./api/document');
var exam = require('./api/exam');
var course = require('./api/course');



// // We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header
const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://ccumissa.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'Rbai-Admin-API',
    issuer: "https://ccumissa.auth0.com/",
    algorithms: ['RS256']
});


router.use('/api/news', authCheck, news);
router.use('/api/member', authCheck, member);
router.use('/api/recruit', authCheck, recruit);
router.use('/api/upload', upload);
router.use('/api/wysiwyg', wysiwyg);
// router.use('/api/mail', mail);
router.use('/api/document', authCheck, document);
router.use('/api/exam', authCheck, exam);
router.use('/api/course', authCheck, course);



router.use(function (req, res) {
    res.render(path.join(__dirname, '../../public/angular/dist-admin/index-admin.html'));
});

module.exports = router;