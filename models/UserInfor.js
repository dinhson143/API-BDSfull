const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserInforSchema = new Schema({
    Phone: {
        type: String,
        required: true,
        unique: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Name:{
        type: String,
        required: true,
    },
    Role:{
        type: String,
        required: true,
    },
   
})


module.exports =mongoose.model('UserInfors',UserInforSchema);