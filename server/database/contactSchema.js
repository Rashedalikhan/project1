const {Schema, model} = require('mongoose');   

const ContactSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})

const Contact = new model('Contact', ContactSchema);

module.exports = Contact;