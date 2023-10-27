const mongoose = require('mongoose');
const db = require('./config/database');
const { Schema }  = mongoose;
//ask kush bhaiya about phone no and password
const userSchema = new Schema({

    Phno:{
        type:String,
        required:true,
        unique:true
        
        
    },
    //does password have to be unique?
    password:{
        type:String,
        required:true,
    }

});
const usermodel = database.model('user',userSchema);
module.exports = usermodel;