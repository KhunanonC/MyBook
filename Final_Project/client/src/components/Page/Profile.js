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
        <div className="container-profile-post">
            <h1>โพสต์ของฉัน</h1>
        {data.map((data,index)=>(
            <div className="post-profile-container" key={index}>
                <div className='photo-block-proflie-container'>
                    <p>This is pic</p>
                </div>
                <div className="col pt-3 pb-2">
                    <h2>{data.bookname}</h2>
                    <div className='pt-3' dangerouslySetInnerHTML={{__html:data.price}}/>
                    <div className='pt-3' dangerouslySetInnerHTML={{__html:data.details}}/>
                    <div className='pt-3' dangerouslySetInnerHTML={{__html:data.contact}}/>
                    <p>ผู้เขียน:{data.user}</p>
                    <div>
                        <Link className="btn btn-outline-success" to={`/edit-post/${data.slug}`}>แก้ไขข้อมูล</Link> &nbsp;
                        <button className="btn btn-outline-danger" onClick={()=>confirmDelete(data.slug)}>ลบข้อมูล</button>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}
export default Profile 