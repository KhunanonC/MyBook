const jwt = require("jsonwebtoken") //ใช้ในการ Login เข้าสู่ระบบของ User
const expressJWT = require("express-jwt") //ใช้ในการตรวจสอบ token

exports.login=(req,res)=>{
    //ข้อมูล Username,Password
    const {username,password} = req.body
    if(password === process.env.PASSWORD){
        //login เข้าสู่ระบบ
        const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1d'})
        return res.json({token,username})
    }else{
        return res.status(400).json({error:"รหัสผ่านไม่ถูกต้อง!"})
    }
}

//ตรวจสอบ token ยืนยันตัวตน
exports.requireLogin=expressJWT({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})