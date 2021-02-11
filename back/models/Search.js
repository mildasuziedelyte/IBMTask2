const mongoose = require ('mongoose');

const SearchShema = mongoose.Schema({
    keyword:{
        type: String,
        minLength:1,
        maxLength:20,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Search', SearchShema);