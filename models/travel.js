const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//create Schema

const TravelSchema = new Schema({
    vehiclename  : {
        type:String,
        required:true
    },
    drivername : {
        type:String,
        required:true
    },
    vehiclenumber : {
        type:String,
        required:true
    }


});


module.exports = Travel = mongoose.model('Travel', TravelSchema);