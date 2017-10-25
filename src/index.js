const Email = require('email-templates');
const nodemailer = require('nodemailer');
const path = require('path');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'jsdevelopertest@gmail.com',
        pass: 'Th1s1s4T3st1ng!!'
    },
});


const email = new Email({
  juice: true,
  juiceResources: {
    preserveImportant: true,
    webResources: {
        relativeTo: path.join(__dirname, '../emails/test/css')
    }
  }, 
  message: {
    from: 'niftylettuce@gmail.com'
  },
  // uncomment below to send emails in development/test env:
  // send: true
  transport: transporter
});
email.send({
  template: 'test',
  message: {
    to: 'jaarensacharow@gmail.com'
  },
  locals: {
    name: 'Elon'
  }
}).then(console.log).catch(console.error);