const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//create Schema

const travelCategorySchema = new Schema({
    travelcategoryname:{
        type:String,
        required:true
    }
});


module.exports = Category = mongoose.model('TravelCategory', travelCategorySchema);