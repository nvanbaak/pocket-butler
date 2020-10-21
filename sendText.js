const accountSid = 'ACd34d25444a843c52ff9d513ed886fdf4'

const authToken = 'a51c85ed09e24f336da248960f2e9a9e'
const client = require('twilio')(accountSid, authToken)

client.messages.create({
        body: 'This is a test text message!!',
        from: '+12186667109',
        to: ''
    }).then(message => console.log(message))
    .catch((err) => console.log(err))