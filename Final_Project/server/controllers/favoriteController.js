const favoriteBook = require("../models/favoriteBook");

exports.favorite=(req,res)=>{
    const {favoritebook} = req.body

    favoriteBook.create({favoritebook},(err,blog)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        return res.json(blog)
    })
}