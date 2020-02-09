const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BusinessSchema = new Schema({
    shopname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneno: {
        type: Number,
        minlength: 6,
        maxlength: 12
    },
    storepic: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required:true
    },
    place: {
        type: String
    },
    password: {
        type : String,
        required: true
    },
    isOpen: {
        type: Boolean,
        required:true
    },
    

});

module.exports = Business = mongoose.model('Business', BusinessSchema);