const mongoose = require('mongoose');
const db = require('./config/database');
const { Schema }  = mongoose;
const userSchema = new Schema({

    Phno:{
        type:String,
        required:true,
        unique:true
        
        
    },
    
    password:{
        type:String,
        required:true,
    }

});
const usermodel = database.model('user',userSchema);
module.exports = usermodel;