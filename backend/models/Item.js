const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    num:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const Item = mongoose.model('item', UserSchema);
  module.exports = Item;