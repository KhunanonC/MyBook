import axios from "axios";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

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
        <div className="container p-5">
        {blog.map((blog,index)=>(
            <div className="row" key={index} style={{borderBottom:'5px solid silver'}}>
            <div className="form-control-sellbook">
                <div className='form-control-sellbook' dangerouslySetInnerHTML={{__html:blog.bookname}}/>
                <div className='form-control-sellbook' dangerouslySetInnerHTML={{__html:blog.price}}/>
                <div className='form-control-sellbook' dangerouslySetInnerHTML={{__html:blog.details}}/>
                <div className='form-control-sellbook' dangerouslySetInnerHTML={{__html:blog.contact}}/>
            </div>
            </div>
        ))}
        </div>
    );
}

export default App;