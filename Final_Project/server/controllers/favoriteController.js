const userfavorite = require("../models/favoriteBook");

exports.favorite=(req,res)=>{
    const {userfavoritebook} = req.body

    userfavorite.create({userfavoritebook},(err,blog)=>{
        if(err){
            return res.status(400).json({error:"ได้เพิ่มในหนังสือที่สนใจไปแล้ว"})
        }
        return res.json(blog)
    })
}