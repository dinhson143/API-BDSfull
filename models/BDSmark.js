const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bdsMarkSchema = new Schema({
    IDuser: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    IDbds: {
        type: Schema.Types.ObjectId,
        ref: 'BDSs'
    },
})


module.exports = mongoose.model('BDSmarks', bdsMarkSchema);