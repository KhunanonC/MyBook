const userfavorite = require("../models/favoriteBook");

exports.favorite=(req,res)=>{
    const {user,userfavoritebook} = req.body

    userfavorite.create({user,userfavoritebook},(err,blog)=>{
        if(err){
            return res.status(400).json({error:"ได้เพิ่มในหนังสือที่สนใจไปแล้ว"})
        }
        return res.json(blog)
    })
}

//ดึงข้อมูลจาก Database อ้างอิงตาม user
exports.getUserFavorite=(req,res)=>{
    const user=req.body.user
    console.log({user})
    // userfavorite.find({"user":user})
    // .then(
    //     resp =>{
    //         return res.json(resp)
    //     }
    // )
    userfavorite.aggregate([
        {$match:{user}},
        {$lookup:{
            from:"booksellers",
            localField:"userfavoritebook",
            foreignField:"bookname",
            as:"favoritebookDetails"
        }}
    ])
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}