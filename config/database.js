const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://localhost:27017').on('open',()=>{
    console.log('success');
}).on('error',()=>{
    console.log("error")
});
module.exports = connection;

