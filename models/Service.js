const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },  
   name: {
    type: String,
    required:true
  },
  category:{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required:true
  },
  place:{
    type: Schema.Types.ObjectId,
    ref: 'place',
    required:true
  },
  type:{
    type:String,//condractor or individual worker
    required:true
  },
  address:{

    type:String,
    required:true
  },
  experience:{

    type:String,
    required:true
  },
  available:{

    type:String
  },
  description:{

    type:String,
    required:true
  },
  mobileno:{

    type:Number,
    minlength: 6,
    maxlength: 12,
    required:true
  },
  social: {
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Service = mongoose.model('Service', ServiceSchema);


  


    
