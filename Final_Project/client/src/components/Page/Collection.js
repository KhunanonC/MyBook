import React from "react"
import './style/Collection.css'
import book1 from '../../pic/BookSildeShow/book1.jpg';
import book2 from '../../pic/BookSildeShow/book2.jpg';
import book3 from '../../pic/BookSildeShow/book3.jpg';
import book4 from '../../pic/BookSildeShow/book4.jpg';
import book5 from '../../pic/BookSildeShow/book5.jpg';

const Collection=(e)=>{ 
return(
    <div className="container-collection">
        {/* book type list */}
        <div className="lst-type-book-box">
            <h1>หมวดหมู่</h1>
            <div className="lst-type-book">
                <div>
                    <h2>ความรู้</h2>
                </div>
                <div>
                    <h2>การเงิน</h2>
                </div>
                <div>
                    <h2>นิยาย</h2>   
                </div>
                <div>
                    <h2>การ์ตูน</h2> 
                </div>
            </div>
        </div>
        {/* slide show */}
        <div className="top-slide-show"> 
           <div className="slidershow middle">
                <div className="slides">
                    <input type="radio" name="r" id="r1" cheacked/>
                    <input type="radio" name="r" id="r2"/>
                    <input type="radio" name="r" id="r3"/>
                    <input type="radio" name="r" id="r4"/>
                    <input type="radio" name="r" id="r5"/>
                    <div className="slide s1">
                        <img src={book1} alt="book1"/>
                    </div> 
                    <div className="slide s2">
                        <img src={book2} alt="book2"/>
                    </div> 
                    <div className="slide s3">
                        <img src={book3} alt="book3"/>
                    </div> 
                    <div className="slide s4">
                        <img src={book4} alt="book4"/>
                    </div> 
                    <div className="slide s5">
                        <img src={book5} alt="book5"/>
                    </div> 
                </div>
                <div className="navigation">
                    <label for="r1" className="bar"></label>
                    <label for="r2" className="bar"></label> 
                    <label for="r3" className="bar"></label> 
                    <label for="r4" className="bar"></label> 
                    <label for="r5" className="bar"></label> 
                </div>
           </div> 
        </div>
    </div>
    )
}
export default Collection