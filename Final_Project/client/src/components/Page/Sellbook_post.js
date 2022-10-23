import React,{useState} from 'react';
import './style/Sellbook_post.css'

const Sellbook_post=()=>{
    //init state
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
    return(
        <div className='container-sellbook-post'>
            <h1>ยินดีต้อนรับสู่ SongTor</h1>
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
                 <form className ="" >
                    <div className="form-control-sellbook">
                        <label>ชื่อหนังสือ</label>
                        <input type="text" placeholder="กรุณากรอกชื่อหนังสือ" />
                    </div>
                    <div className="form-control-sellbook">
                        <label>ราคา</label>
                        <input type="text" placeholder="กรุณากรอกราคา" />
                    </div>
                    <div className="form-control-sellbook">
                        <label>รายละเอียด</label>
                        <input type="text" placeholder="กรุณากรอกรายละเอียดหนังสือ" />
                    </div>
                    <div className="form-control-sellbook">
                        <label>ช่องทางการติดต่อ</label>
                        <input type="text" placeholder="กรุณากรอกช่องทางการติดต่อ" />
                    </div>
                    <div>
                        <label for="book-type">ประเภทหนังสือ</label>
                        <select name="book-type" id="book-type">
                            <option value="money">การเงิน</option>
                            <option value="knowledge">ความรู้</option>
                            <option value="novel">นิยาย</option>
                            <option value="cartoon">การ์ตูน</option>
                        </select>
                    </div>
                    <button className='sign-in-btn' type="submit">บันทึกข้อมูล</button>
                </form>  
            </div>
        </div>
    )
}
export default Sellbook_post;