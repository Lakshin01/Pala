const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//create Schema

const CategorySchema = new Schema({
    categoryname:{
        type:String,
        required:true
    }

});


module.exports = Category = mongoose.model('Category', CategorySchema);