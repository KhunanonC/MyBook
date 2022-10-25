import './style/Profile.css';

const Profile=()=>{ 
    return(
        <div className='container-profile'>
            <h1>โพสต์ของคุณ</h1>
            <div className='post-profile-container'>
                <div className='photo-block-container'> {/*for img preview */}
                <p>this is picture</p>
                </div>
                 <form className ="">
                    <div className="form-control-profile">
                        <h3>ชื่อหนังสือ:</h3>
                        <p>hjhjshdjhs</p>
                    </div>
                    <div className="form-control-profile">
                        <h3>ราคา:</h3>
                        <p>hjhjshdjhs</p>
                    </div>
                    <div className="form-control-profile">
                        <h3>รายละเอียด:</h3>
                        <p>hjhjshdjhs</p>
                    </div>
                    <div className="form-control-profile">
                        <h3>ช่องทางการติดต่อ:</h3>
                        <p>hjhjshdjhs</p>
                    </div>
                    <div className='btn-profile'>
                        <button className='sign-in-btn' type="submit">แก้ไขข้อมูล</button>
                        <button className='sign-in-btn' type="submit">ลบข้อมูล</button> 
                    </div>
                </form>  
            </div>
        </div>
    )
}
export default Profile 