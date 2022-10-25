import './style/SignUp.css'
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";

import axios from "axios";
import {getUser,getToken, authenticate} from "../../services/authorize";
import Swal from "sweetalert2";

const SignUp=(props)=>{
    const [state,setState] = useState({
        username:"",
        telephone:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const {username,telephone,email,password,confirmpassword} = state

    //กำหนดค่าให้กับ state
    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value});
    }

    const submitForm=(e)=>{
        e.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API}/sign-up`,{username,telephone,email,password,confirmpassword})
        .then(response=>{
            //login สำเร็จ
            authenticate(response,props.history.push("/"))
        setState({...state,username:"",telephone:"",email:"",password:"",confirmpassword:""})
        })
        .catch(err=>{
            Swal.fire('แจ้งเตือน',err.response.data.error,'error')
        })
    }

    useEffect(()=>{
        getUser() && props.history.push("/")
    },[])

//--------Showing Part 
    return(
        <div className ="container-sign-up">
           <form className ="form" onSubmit={submitForm}>
                <h2 className='Sign-up-header'>Sign Up</h2>
                <p>หากเป็นสมาชิกแล้วกรุณา <Link to="/sign-in">เข้าสู่ระบบ</Link></p>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" placeholder="กรุณากรอกชื่อผู้ใช้" value={username} onChange={inputValue("username")}/>
                </div>
                <div className="form-control">
                    <label>โทรศัพท์</label>
                    <input type="text" placeholder="0812345678" value={telephone} onChange={inputValue("telephone")}/>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" placeholder="กรุณากรอกอีเมล" value={email} onChange={inputValue("email")}/>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" placeholder="กรุณากรอกรหัสผ่าน" value={password} onChange={inputValue("password")}/>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" placeholder="กรุณากรอกยืนยันรหัสผ่าน" value={confirmpassword} onChange={inputValue("confirmpassword")}/>
                </div>
                <button className='sign-up-btn' type="submit">สมัครสมาชิก</button>
           </form> 
        </div>
    )
}
export default SignUp