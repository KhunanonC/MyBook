const bookSeller = require("../models/bookSeller");

//บันทึกข้อมูลหนังสือลงใน data base
exports.bookDetails=(req,res)=>{
    const {user,bookname,price,details,contact} = req.body

    switch (true) {
        case !bookname:
            return res.status(400).json({error:"กรุณากรอกชื่อหนังสือ"})
        case !price:
            return res.status(400).json({error:"กรุณากรอกราคา"})
        case !details:
            return res.status(400).json({error:"กรุณากรอกรายละเอียดหนังสือ"})
        case !contact:
            return res.status(400).json({error:"กรุณากรอกช่องทางการติดต่อ"})
    }

    bookSeller.create({user,bookname,price,details,contact},(err,blog)=>{
        if(err){
            return res.status(400).json({error:"กรุณาใส่เป็นตัวเลข"})
        }
        return res.json(blog)
    })
}