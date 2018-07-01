const nodemailer = require('nodemailer')

const config = require('config').get('mail'),
  domain = require('config').get('server').domain;

const transporter = nodemailer.createTransport(config);


module.exports = function (mail, callback) {
  if (!mail.html) {
    return callback("mail is empty");
  }
  var mailOptions = {
    from: `資管系-${mail.publisher ? mail.publisher : "許家琪"} <admhcc@ccu.edu.tw>`,
    to: mail.to ? mail.to : config.to,
    subject: mail.subject ? mail.subject : '中正大學資管系通知',
    html: mail.html + `<br>https://${domain}/${mail.link}`,
    attachments: mail.attachment ? [ mail.attachment ] : null
  };

  transporter.sendMail(mailOptions, function (error, info) {
    console.log(info);
    console.log(error);
    return callback(error);
  });
}