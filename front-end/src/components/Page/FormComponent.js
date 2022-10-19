import './FormComponent.css'
import { useState } from "react";
import {Link} from "react-router-dom";

const FormComponent =()=>{
//------State InitPart
    const [userName,setUserName]= useState('')
    const [phone,setUserPhone]= useState('')
    const [email,setUserEmail]= useState('')
    const [password,setPassword]= useState('')
    const [repassword,setRePassword]= useState('')
//------State Error Message
    const [errorUserName,setErrorUserName]=useState('')
    const [errorPhone,setErrorPhone]=useState('')
    const [errorEmail,setErrorEmail]=useState('')
    const [errorPassword,setErrorPassword]=useState('')
    const [errorRepassword,setErrorRepassword]=useState('')
//------State Color Validation
    const [userNameColor,setUserNameColor]=useState('')
    const [phoneColor,setUserPhoneColor]=useState('')
    const [emailColor,setUserEmailColor]=useState('')
    const [passwordColor,setPasswordColor]=useState('')
    const [repasswordColor,setRePasswordColor]=useState('')

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
        if(email.includes('@')){ //Email Check
            setErrorEmail('')
            setUserEmailColor('green')
        }else{
            setErrorEmail('รูปแบบอีเมล์ไม่ถูกต้อง')
            setUserEmailColor('red')
        }
        if(password.length >=8 ){ //Password Check
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รหัสผ่านต้องมีจำนวนอย่างน้อย 8 ตัวอักษร')
            setPasswordColor('red')
        }
        if(repassword !=" " && repassword === password && repassword.length >= 8){ //Repassword Check
            setErrorRepassword('')
            setRePasswordColor('green')
        }else{
            setErrorRepassword('กรุณากรอกรหัสผ่านให้ตรงกัน')
            setRePasswordColor('red') 
        }
    }
//--------Showing Part 
    return(
        <div className ="container">
        <h2>Sign Up</h2>
        <p>หากเป็นสมาชิกแล้วกรุณา <Link to="/sign-in">เข้าสู่ระบบ</Link></p>
           <form className ="form" onSubmit={validateForm}> 
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" placeholder="กรุณากรอกชื่อผู้ใช้" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderRightColor:userNameColor}}/>
                    <small>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>โทรศัพท์</label>
                    <input type="text" placeholder="0812345678" value={phone} onChange={(e)=>setUserPhone(e.target.value)} style={{borderRightColor:phoneColor}} />
                    <small>{errorPhone}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" placeholder="กรุณากรอกอีเมล" value={email} onChange={(e)=>setUserEmail(e.target.value)} style={{borderRightColor:emailColor}}/>
                    <small>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" placeholder="กรุณากรอกรหัสผ่าน" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderRightColor:passwordColor}}/>
                    <small>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" placeholder="กรุณากรอกยืนยันรหัสผ่าน" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderRightColor:repasswordColor}}/>
                    <small>{errorRepassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
           </form> 
        </div>
    )
}
export default FormComponent