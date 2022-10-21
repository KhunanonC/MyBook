const mongoose = require("mongoose")

const bookinfo = mongoose.Schema({
    bookname:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    details:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("bookSeller",bookinfo)