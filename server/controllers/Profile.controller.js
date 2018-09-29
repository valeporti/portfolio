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
  const indu = req.query.indu;
  const purp = req.query.purp;
  const courtesy_mes = req.query.courtesy_mes;

  //nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport

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
      to: [process.env.MAIL_MINE, mail],  // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Name: ' + name + ' && Purpose: ' + purp + ' && Industry: ' + indu + ' && Message ' + mess, // plain text body
      html: '<p>' + courtesy_mes + '</p>' 
        + '<p><b>Name: ' + name + '</b></p> <p><b>Mail: ' + mail 
        + '</b></p> <p><b>Purpose: ' + purp + '</b></p> <p><b>Industry: ' 
        + indu + '</b></p> <p><b>Message ' + mess + '</b>' // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({error: 'Mail not sent!!'});
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        return res.status(200).json({success: 'Mail Sent!!'})
    });
//});

  //console.log(req.query);
  //return res.send('lol');
}
