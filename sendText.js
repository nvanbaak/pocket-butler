module.exports = function (app) {
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID

const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)


client.messages.create({
        body: 'This is a test text message!!',
        from: '+12186667109',
        to: ''
    }).then(message => console.log(message))
    .catch((err) => console.log(err))
}