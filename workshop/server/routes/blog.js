//รับ Request จาก User
const express = require("express")
const route = express.Router()
const {create,getAllblogs,singleBlog,remove,update} = require("../controllers/blogController")
const {requireLogin} = require("../controllers/authController")

route.post('/create',requireLogin,create) //post บันทึกข้อมูลลง Database

route.get('/blogs',getAllblogs) //get ดึงข้อมูลบน Database
route.get('/blog/:slug',singleBlog)

route.delete('/blog/:slug',requireLogin,remove) //delete ลบข้อมูลบน Database ฝั่ง Server
route.put('/blog/:slug',requireLogin,update) //put อัพเดตข้อมูลบน Database ฝั่ง Server

module.exports=route