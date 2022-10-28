import './style/SignIn.css'
import { useState } from "react";
import {Link} from "react-router-dom";


const SignIn =()=>{
//------State InitPart
    const [userName,setUserName]= useState('')
    const [password,setPassword]= useState('')
//------State Error Message
    const [errorUserName,setErrorUserName]=useState('')
    const [errorPassword,setErrorPassword]=useState('')
//------State Color Validation
    const [userNameColor,setUserNameColor]=useState('')
    const [passwordColor,setPasswordColor]=useState('')
//-----Condition Using State
    const validateForm =(e)=>{ //e =event
        e.preventDefault() //Press Submit and Form will not reset data in the fill box
        if(userName.length>8){ //userName Check
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('ไม่พบชื่อผู้ใช้ในระบบ')
            setUserNameColor('red')
        }
        if(password.length >=8 ){ //Password Check
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('รหัสผ่านไม่ถูกต้อง')
            setPasswordColor('red')
        }
    }
//--------Showing Part 
    return(
        <div className ="container-Sign-In">
            <div className='container-form-sign-in'>
                <form className ="form-Sign-In" onSubmit={validateForm}>
                    <h2 className='Sign-in-header'>Sign In</h2>
                    <p>ยังไม่เป็นสมาชิก? <Link to="/sign-up">สมัครสมาชิก</Link></p>
                    <div className="form-control-Sign-In">
                        <label>ชื่อผู้ใช้</label>
                        <input type="text" placeholder="กรุณากรอกชื่อผู้ใช้" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderRightColor:userNameColor}}/>
                        <small>{errorUserName}</small>
                    </div>
                    <div className="form-control-Sign-In">
                        <label>รหัสผ่าน</label>
                        <input type="password" placeholder="กรุณากรอกรหัสผ่าน" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderRightColor:passwordColor}}/>
                        <small>{errorPassword}</small>
                    </div>
                    <button className='sign-in-btn' type="submit">เข้าสู่ระบบ</button>
                </form>   
            </div>
                <hr></hr>
            <div>
                <h1>Footer Component</h1>
            </div>    
        </div>
    )
}
export default SignIn