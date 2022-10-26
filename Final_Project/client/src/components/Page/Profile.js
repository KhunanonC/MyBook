import './style/Profile.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {useState,useEffect} from "react";
import Swal from "sweetalert2";
import { getUser,getToken } from "../../services/authorize";

const Profile=()=>{
    const [data,setData] = useState([])
    const user = String(getUser())

    //function ดึงข้อมูลทั้งหมดมาจากฐานข้อมูล
    const fetchData=()=>{
        axios
        .post(`${process.env.REACT_APP_API}/collectionUser`,{user})
        .then(response=>{
            setData(response.data)
        })
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        fetchData()
    },[])
    
    //function ยืนยันการลบข้อมูล
    const confirmDelete=(slug)=>{
        Swal.fire({
        title:"คุณต้องการลบข้อมูลหรือไม่ !",
        icon:"warning",
        showCancelButton:true
        }).then((result)=>{
        //กดปุ่ม ok หรือ ตกลง
        if(result.isConfirmed){
            deleteBlog(slug)
        }
        })
    }

    const deleteBlog=(slug)=>{
        //ส่ง request ไปที่ api เพื่อลบข้อมูล
        axios
        .delete(`${process.env.REACT_APP_API}/delete/${slug}`,
        {
        headers:{
            authorization:`Bearer ${getToken()}`
        }
        })
        .then(response=>{
        Swal.fire("Deleted!",response.data.message,"success")
        fetchData()
        })
        .catch(err=>console.log(err))
    }

    return(
        <div className="container-profile">
            <h1>โพสต์ของฉัน</h1>
        {data.map((data,index)=>(
            <div className="post-profile-container" key={index}>
                <div className='photo-block-container'>
                    <p>this is picture</p>
                </div>
                <div className="form-block-container">
                    <div className="form-control">
                        <h2>ชื่อหนังสือ:{data.bookname}</h2>
                    </div>
                    <div className="form-control">
                        <p>ราคา:{data.price}</p>
                    </div>
                    <div className="form-control">
                        <p>รายละเอียด:{data.details}</p>
                    </div>
                    <div className="form-control">
                        <p>ช่องทางการติดต่อ:{data.contact}</p>
                    </div>
                    <div className="form-control">
                        <p>ผู้เขียน:{data.user}</p>
                    </div>
                <div>
                    <Link className='sign-in-btn' to={`/edit-post/${data.slug}`}>แก้ไขข้อมูล</Link> &nbsp;
                    <button className='sign-in-btn' onClick={()=>confirmDelete(data.slug)}>ลบข้อมูล</button>
                </div>
            </div>
            </div>
        ))}
        </div>
    )
}
export default Profile 