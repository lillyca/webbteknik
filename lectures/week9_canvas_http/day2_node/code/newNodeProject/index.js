var nodemailer = require("nodemailer");
// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "c3ldemo@gmail.com",
        pass: "c3ldemo1"
    }
});
// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Fred Foo  <c3ldemo@gmail.com>", // sender address
    to: "c3ldemo@gmail.com", // list of receivers
    subject: "Hello ", // Subject line
    html: "<b>Hello world </b>" // html body
}
// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Message sent: " + response.message);
    }
    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});