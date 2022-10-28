const mongoose = require("mongoose")

const favoriteinfo = mongoose.Schema({
    userfavoritebook:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("userfavorite",favoriteinfo)