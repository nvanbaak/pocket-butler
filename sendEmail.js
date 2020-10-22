const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pocketbuttler@gmail.com',
        pass: 'Password@g8'
    }
})

let mailOptions = {
    from: 'pocketbuttler@gmail.com',
    to: '',
    subject: 'Testing',
    text: 'it works'
}

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('somthing went wrong!', err)
    } else {
        console.log('Email sent!');
    }

})