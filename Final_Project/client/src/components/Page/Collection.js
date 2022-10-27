import axios from "axios";
import {useState,useEffect} from "react";
import "./style/Collection.css"

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

    return (
        <div className="container-collection">
            <h1>โพสต์ใหม่ล่าสุด</h1>
        {blog.map((blog,index)=>(
            <div className="card" key={index}>
                <div className="pic-card">
                    <p>this is pic</p>
                </div>
                <div className="from-card">
                    <div className="form-control-collection">
                        <h1>ชื่อหนังสือ:{blog.bookname}</h1>
                    </div>
                    <div className="form-control-collection"> 
                        <label>ราคา:</label>
                        <p>{blog.price} บาท</p>
                    </div>
                    <div className="form-control-collection">
                        <label>รายละเอียด:</label>
                        <p>{blog.details} </p>
                    </div>
                    <div className="form-control-collection">
                        <label>ช่องทางการติดต่อ:</label>
                        <p>{blog.contact}</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
}

export default App;