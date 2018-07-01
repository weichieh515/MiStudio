const config = require('config'),
    restAPI = config.get('oneSignal.restAPI'),
    appID = config.get('oneSignal.appID')

exports.sendNotification = function (message, url) {

    var data = {
        app_id: appID,
        contents: { "en": message },
        url: '/' + url,
        included_segments: ["All"]
    };

    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + restAPI
    };

    var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };

    var https = require('https');
    var req = https.request(options, function (res) {
        res.on('data', function (data) {
            console.log("Response:");
            console.log(JSON.parse(data));
        });
    });

    req.on('error', function (e) {
        console.log("ERROR:");
        console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
};