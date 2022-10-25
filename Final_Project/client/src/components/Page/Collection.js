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
            <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
            <div className="col pt-3 pb-2">
                <Link to={`/blog/${blog.slug}`}>
                <h2>{blog.bookname}</h2>
                </Link>
                <div className='pt-3' dangerouslySetInnerHTML={{__html:blog.content}}/>
                <p className="text-muted">ผู้เขียน:{blog.username} , เผยแพร่:{new Date(blog.createdAt).toLocaleString()}</p>
            </div>
            </div>
        ))}
        </div>
    );
}

export default App;