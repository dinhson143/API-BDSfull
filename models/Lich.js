const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LichSchema = new Schema({
    IDuser: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    IDbds: {
        type: Schema.Types.ObjectId,
        ref: 'BDSs'
    },
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Sdt: {
        type: String,
        required: true,
    },
    Message: {
        type: String,
    },
    Xacnhan: {
        type: Boolean,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Lichs', LichSchema);