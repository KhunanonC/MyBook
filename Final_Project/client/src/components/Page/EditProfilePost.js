import React,{useState,useEffect} from 'react';
import './style/SongTor_post.css';
import {getUser,getToken} from "../../services/authorize";
import {Link,useHistory} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditProfilePost=(props)=>{
    const [state,setState] = useState({
        bookname:"",
        price:"",
        details:"",
        contact:"",
        slug:""
    })
    const {bookname,price,details,contact,slug} = state

    const history = useHistory();

    //ดึงข้อมูลบทความที่ต้องการแก้ไข
    useEffect(()=>{
      axios
      .get(`${process.env.REACT_APP_API}/signleData/${props.match.params.slug}`)
      .then(response=>{
          const {bookname,price,details,contact,slug} = response.data
          setState({...state,bookname,price,details,contact,slug})
      })
      .catch(err=>alert(err))
      // eslint-disable-next-line
    },[])

    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
  
    const handleImageChange = (e) => {
      setError(false);
      const selected = e.target.files[0];
      const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
      if (selected && ALLOWED_TYPES.includes(selected.type)) {
        let reader = new FileReader();
        reader.onloadend = () => {
          setImgPreview(reader.result);
        };
        reader.readAsDataURL(selected);
      } else {
        setError(true);
      }
    };

    const showUpdate=()=>(
      <div className='container-sellbook-post'>
            <h1>แก้ไขโพสต์</h1>
            <div className='post-sellbook-container'>
                <div className='photo-block-container'> {/*for img preview */}
                    {error && <p className='errorMsg'> File not supported </p>}
                    <div 
                        className='ImgPreview'
                        style={{
                            background: imgPreview ? 
                            `url("${imgPreview}") no-repeat center/cover`
                            : "#F6F6F6"
                        }}  
                    >
                        {!imgPreview && (
                            <>
                                <p> โปรดเพิ่มรูปภาพ</p>
                                <label htmlFor='fileUpload' className='customFileUpload'>
                                    เลือกไฟล์
                                </label>
                                <input type="file" id='fileUpload' onChange={handleImageChange}/>
                                <span>( jpg, jpeg หรือ png )</span>
                            </>
                        )}
                        <div className='btn'>
                            {imgPreview && 
                            (<button className='btn-remove' onClick={() =>setImgPreview(null)}> ลบรูปภาพ</button>)}
                        </div>
                    </div>
                </div>
                 <form className ="" onSubmit={submitForm}>
                    <div className="form-control-sellbook">
                        <label>ชื่อหนังสือ</label>
                        <input type="text" placeholder="กรุณากรอกชื่อหนังสือ" value={bookname} onChange={inputValue("bookname")}/>
                    </div>
                    <div className="form-control-sellbook">
                        <label>ราคา</label>
                        <input type="text" placeholder="กรุณากรอกราคา" value={price} onChange={inputValue("price")}/>
                    </div>
                    <div className="form-control-sellbook">
                        <label>รายละเอียด</label>
                        <input type="text" placeholder="กรุณากรอกรายละเอียดหนังสือ" value={details} onChange={inputValue("details")}/>
                    </div>
                    <div className="form-control-sellbook">
                        <label>ช่องทางการติดต่อ</label>
                        <input type="text" placeholder="กรุณากรอกช่องทางการติดต่อ" value={contact} onChange={inputValue("contact")}/>
                    </div>
                    <button className='sign-in-btn' type="submit">บันทึกข้อมูล</button>
                </form>  
            </div>
        </div>
    )

    //กำหนดค่าให้กับ state
    const inputValue=name=>event=>{
      setState({...state,[name]:event.target.value});
    }

    const submitForm=(e)=>{
      e.preventDefault();
      console.log("API URL = ",process.env.REACT_APP_API)
      axios
      .put(`${process.env.REACT_APP_API}/updatepost/${slug}`,{bookname,price,details,contact},
      {
        headers:{
          authorization:`Bearer ${getToken()}`
        }
      })
      .then(async(response)=>{
        await Swal.fire('แจ้งเตือน',"แก้ไขข้อมูลเรียบร้อย",'success')
        const {bookname,price,details,contact,slug} = response.data
        setState({...state,bookname,price,details,contact,slug})
        history.push("/profile")
      })
      .catch(err=>{
        Swal.fire('แจ้งเตือน',err.response.data.error,'error')
      })
    }

    return (
        <div>
          {showUpdate()}
        </div>
      );
}
export default EditProfilePost;