const mongoose = require("mongoose")

const favoriteinfo = mongoose.Schema({
    favoritebook:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("favoriteBook",favoriteinfo)