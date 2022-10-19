import NavbarComponent from "./NavbarComponent";
import { useState,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { authenticate,getUser } from "../services/authorize";
import {withRouter} from "react-router-dom";

const SignupComponent=(props)=>{
    const [state,setState] = useState({
        username:"",
        telephone:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const {username,telephone,email,password,confirmpassword} = state

    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value});
    }

    const submitForm=(e)=>{
        e.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API}/signup`,{username,telephone,email,password,confirmpassword})
        .then(response=>{
          //signup สำเร็จ
          authenticate(response,()=>props.history.push("/login")) //signup เสร็จแล้วกลับไปหน้า /create
        }).catch(err=>{
          Swal.fire('แจ้งเตือน',err.response.data.error,'error')
        })
    }

    //ถ้า login แล้วไม่สามารถ login ได้อีก
    useEffect(()=>{
      getUser() && props.history.push("/")
    },[])

    return(
        <div className="container p-5">
          <NavbarComponent/>
          <h1>สมัครสมาชิก</h1>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label>ชื่อผู้ใช้</label>
              <input type="text" className="form-control"
                value={username} 
                onChange={inputValue("username")}
                placeholder="กรุณากรอกชื่อผู้ใช้"
                />
            </div>
            <div className="form-group">
              <label>โทรศัพท์</label>
              <input type="text" className="form-control"
                value={telephone} 
                onChange={inputValue("telephone")}
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
            </div>
            <div className="form-group">
              <label>อีเมล</label>
              <input type="text" className="form-control"
                value={email} 
                onChange={inputValue("email")}
                placeholder="กรุณากรอกอีเมล"
                />
            </div>
            <div className="form-group">
              <label>รหัสผ่าน</label>
              <input type="password" className="form-control"
                value={password}
                onChange={inputValue("password")}
                placeholder="กรุณากรอกรหัสผ่าน"
              />
            </div>
            <div className="form-group">
              <label>ยืนยันรหัสผ่าน</label>
              <input type="password" className="form-control"
                value={confirmpassword} 
                onChange={inputValue("confirmpassword")}
                placeholder="กรุณายืนยันรหัสผ่าน"
                />
            </div>
            <br/>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">ยืนยันสมัครสมาชิก</label>
            </div>
            <br/>
            <input type="submit" value="สมัครสมาชิก" className="btn btn-primary"/>
          </form>
        </div>
    )
}

export default withRouter(SignupComponent);