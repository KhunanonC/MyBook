const userDatabase = require("../models/userDatabase");
const emailValidator = require("email-validator");
const { default: mongoose } = require("mongoose");

//บันทึกข้อมูล user SignUp
exports.signUp=(req,res)=>{
    const {username,telephone,email,password,confirmpassword} = req.body

    switch(true){
        case !username:
            return res.status(400).json({error:"กรุณากรอกชื่อผู้ใช้"})
        case !telephone:
            return res.status(400).json({error:"กรุณากรอกเบอร์โทรศัพท์"})
        case !email:
            return res.status(400).json({error:"กรุณากรอกอีเมล"})
        case !password:
            return res.status(400).json({error:"กรุณากรอกรหัสผ่าน"})
        case !confirmpassword:
            return res.status(400).json({error:"กรุณายืนยันรหัสผ่าน"})
    }

    if(emailValidator.validate(email) == false){
        return res.status(400).json({error:"รูปแบบอีเมลไม่ถูกต้อง"})
    }

    if(confirmpassword != password){
        return res.status(400).json({error:"กรุณากรอกรหัสผ่านให้ตรงกัน"})
    }
    
    //บันทึกข้อมูล user ลงใน database
    userDatabase.create({username,telephone,email,password,confirmpassword},(err,blog)=>{
        if(err){
            return res.status(400).json({error:"กรุณาใช้ชื่อ หรือ อีเมลอื่น"})
        }
        return res.json(blog)
    })
}