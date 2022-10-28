import axios from "axios";
import {useState,useEffect} from "react";
import "./style/Collection.css"
import Swal from "sweetalert2";

//ดึงข้อมูลจาก API มาแสดงผลหน้าแรก
function App() {
    const [blog,setBlogs] = useState([])

    //function ดึงข้อมูลทั้งหมดมาจากฐานข้อมูล
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/collection`)
        .then(response=>{
            setBlogs(response.data)
        })
        .catch(err=>alert(err));
        }

        useEffect(()=>{
            fetchData()
        },[])

    const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL = ",process.env.REACT_APP_API)
        axios
        .post(`${process.env.REACT_APP_API}/bookseller`,
        {user,bookname,price,details,contact,url},
        {
            headers:{
            authorization:`Bearer ${getToken()}`
            }
        })
        .then(async(response)=>{
            await Swal.fire('แจ้งเตือน',"บันทึกข้อมูลเรียบร้อย",'success')
            setState({...state,user:"",bookname:"",price:"",details:"",contact:""})
            history.push("/profile")
        })
        .catch(err=>{
            Swal.fire('แจ้งเตือน',err.response.data.error,'error')
        })
        }

    return (
        <div className="container-collection">
            <h1>โพสต์ใหม่ล่าสุด</h1>
        {blog.map((blog,index)=>(
            <div className="card" key={index}>
                <div className="pic-card">
                    <img src={blog.url} alt=""  className='ImgPreview'/>
                </div>
                <div className="from-card">
                    <div className="form-control-collection">
                        <h1>ชื่อหนังสือ :{blog.bookname}</h1>
                    </div>
                    <div className="form-control-collection"> 
                        <label>ราคา : </label>
                        <p>{blog.price} บาท</p>
                    </div>
                    <div className="form-control-collection">
                        <label>รายละเอียด : </label>
                        <p>{blog.details} </p>
                    </div>
                    <div className="form-control-collection">
                        <label>ช่องทางการติดต่อ : </label>
                        <p>{blog.contact}</p>
                    </div>
                    <div className="form-control-collection">
                        <label>ผู้โพสต์ : </label>
                        <p>{blog.user}</p>
                    </div>
                    <div className='btn-component-profile'>
                        <form className ="" onSubmit={submitForm}>
                            <button className='btn-profile' type="submit">สนใจหนังสือ</button>
                        </form>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
}

export default App;