const userDatabase = require("../models/userDatabase");

exports.getUserData=(req,res)=>{
    const userid=req.body.userid
    console.log({userid})
    locations.find({"ID":userid})
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}