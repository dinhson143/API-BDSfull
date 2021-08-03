const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bdsSchema = new Schema({
    maloaiBDS: {
        type: Schema.Types.ObjectId,
        ref: 'LoaiBDSs'
    },
    Name: {
        type: String,
        required: true,
        unique: true,
    },
    Mota: {
        type: String,
        required: true,
    },
    Vitri: {
        type: String,
        required: true,
    },
    Dientich: {
        type: String,
        required: true,
    },
    Gia: {
        type: String,
        required: true,
    },
    KinhDo: {
        type: String,
        required: true,
    },
    ViDo: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    Image: [String],
})


module.exports = mongoose.model('BDSs', bdsSchema);