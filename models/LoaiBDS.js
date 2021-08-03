const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LoaibdsSchema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
    }
})


module.exports = mongoose.model('LoaiBDSs', LoaibdsSchema);