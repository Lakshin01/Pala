const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const PlaceSchema = new Schema({
    placename:{
        type:String,
        required:true
    }

});

module.exports = Place = mongoose.model('Place', PlaceSchema);