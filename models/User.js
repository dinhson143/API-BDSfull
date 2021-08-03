const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
    },
    UserInfor: {
        type: Schema.Types.ObjectId,
        ref: 'UserInfors'
    },
})


module.exports = mongoose.model('Users', UserSchema);