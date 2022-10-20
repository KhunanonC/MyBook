import './style/SignIn.css'
import { useState } from "react";
import {Link} from "react-router-dom";


const SignIn =()=>{
//------State InitPart
    const [userName,setUserName]= useState('')
    const [phone,setUserPhone]= useState('')
    const [password,setPassword]= useState('')
//------State Error Message
    const [errorUserName,setErrorUserName]=useState('')
    const [errorPhone,setErrorPhone]=useState('')
    const [errorPassword,setErrorPassword]=useState('')
//------State Color Validation
    const [userNameColor,setUserNameColor]=useState('')
    const [phoneColor,setUserPhoneColor]=useState('')
    const [passwordColor,setPasswordColor]=useState('')
//-----Condition Using State
    const validateForm =(e)=>{ //e =event
        e.preventDefault() //Press Submit and Form will not reset data in the fill box
        if(userName.length>8){ //userName Check
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('กรุณาใช้ชื่ออื่น')
            setUserNameColor('red')
        }
        if(phone.length==10){ //Phone Check
            setErrorPhone('')
            setUserPhoneColor('green')
        }else{
            setErrorPhone('หมายเลขโทรศัพท์ไม่ถูกต้อง')
            setUserPhoneColor('red')
        }
        if(password.length >=8 ){ //Password Check
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รหัสผ่านต้องมีจำนวนอย่างน้อย 8 ตัวอักษร')
            setPasswordColor('red')
        }
    }
//--------Showing Part 
    return(
        <div className ="container-Sign-In">
            <h2>เข้าสู่ระบบ</h2>
                <p>ยังไม่เป็นสมาชิก? <Link to="/sign-up">สมัครสมาชิก</Link></p>
           <form className ="form-Sign-In" onSubmit={validateForm}> 
                <div className="form-control-Sign-In">
                    <label>ชื่อผู้ใช้ หรือ โทรศัพท์</label>
                    <input type="text" placeholder="กรุณากรอกชื่อผู้ใช้ หรือ เบอร์โทรศัพท์" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderRightColor:userNameColor}}/>
                    <small>{errorUserName}</small>
                </div>
                <div className="form-control-Sign-In">
                    <label>รหัสผ่าน</label>
                    <input type="password" placeholder="กรุณากรอกรหัสผ่าน" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderRightColor:passwordColor}}/>
                    <small>{errorPassword}</small>
                </div>
                {/* <div className="check">
                    <input type="checkbox"/> 
                    <label for=""> 
                        <p>จำฉันไว้</p>
                    </label>
                </div> */}
                {/* <a href="#">ลืมรหัสผ่าน</a> */}
                <button type="submit">เข้าสู่ระบบ</button>
           </form> 
        </div>
    )
}
export default SignIn