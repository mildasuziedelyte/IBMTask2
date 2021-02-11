const mongoose = require ('mongoose');

const ClickSchema = mongoose.Schema({
    videoTitle:{
        type: String,
        required: true,
        maxLength:500
    },
    videoChanel:{
        type: String,
        required: true,
        maxLength:500
    },
    videoId:{
        type: String,
        required: true,
        maxLength:200
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Click', ClickSchema);