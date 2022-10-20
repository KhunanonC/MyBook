import './style/Sellbook_post.css'
const Sellbook_post=()=>{
    return(
        <div >
            <div className='container-sellbook-post'>
                <h1>ยินดีต้อนรับสู่ Book Seller</h1>
            </div>
            <div className='post-sellbook-container'>
                 <div className='photo-block'>
                    <h1>This is picture</h1>
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
export default Sellbook_post