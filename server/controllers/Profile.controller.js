import Profile from '../models/Profile';
import nodemailer from 'nodemailer';

export function getSomething(req, res) {
  return res.status(200).end();
}

export function sendMail(req, res) {
  //console.log(req);
  const name = req.query.name;
  const mess = req.query.mess;
  const mail = req.query.mail;

  nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    console.log('process0');
    console.log(process.env.MAIL_NAME);
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SEC, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USERNAME, // generated ethereal user
            pass: process.env.MAIL_PASSWORD // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"' + process.env.MAIL_NAME + '" <' + process.env.MAIL_USERNAME + '>', // sender address
      to: process.env.MAIL_MINE, // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

  console.log(req.query);
  return res.send('lol');
}
