
const mongoose = require('mongoose');
const attendenceSchema = mongoose.Schema({
    Email: {
        type: String,
    }
    ,
    Date: {
        type: Date,
        default: Date.now
    },
    Status: {
        type: String
    }

})


module.exports = mongoose.model('attendences', attendenceSchema);

