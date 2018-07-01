//node_module
var path = require('path'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express(),
    https = require('https'),
    http = require('http'),
    fs = require('fs'),
    jwt = require('express-jwt'),
    jwks = require('jwks-rsa'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    forceDomain = require('forcedomain'),
    compression = require('compression');

//config
const config = require('config'),
    httpsPort = config.get('server.httpsPort'),
    httpPort = config.get('server.httpPort'),
    dbUrl = config.get('db.url'),
    dbOpt = config.get('db.opt'),
    certPath = config.get('ssl.certPath')


var route = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(forceDomain({
    hostname: config.get('server.domain')
}));




// connect to DB
mongoose.connect(dbUrl, dbOpt, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully connected to ' + dbUrl);
    }
});


app.set('views', path.join(__dirname, '../public/'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// allow CROS
app.use(function (req, res, next) {

    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();

})

// route
app.use(route);

// https files
var httpsOptions = {
    ca: fs.readFileSync(path.join(certPath, "ca_bundle.crt")),
    cert: fs.readFileSync(path.join(certPath, "certificate.crt")),
    key: fs.readFileSync(path.join(certPath, "private.key")),
};


// http redirect to https
http.createServer(function (req, res) {
    var host = config.get('server.env') == "local" ? req.headers['host'].replace(httpPort, httpsPort) : req.headers['host'];
    var redirect = "https://" + host + req.url;
    res.writeHead(301, { "Location": redirect });
    res.end();
}).listen(httpPort, function () {
    console.log('Express HTTP server listening on port ' + httpPort);
});

// https server
https.createServer(httpsOptions, app).listen(httpsPort, function () {
    console.log('Express HTTPS server listening on port ' + httpsPort);
});