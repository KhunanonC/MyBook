import React from "react"
import './Home.css';
import manybook from '../../pic/manybook.png';

const Home=(e)=>{ 
return(
    <div>
        <header>
        <div className="container-Home">
           <div>
                <img  src={manybook} alt="Logo"/>
           </div>
            <section className="middle-info">
                <div className="Logo-mid">
                    <h1 className="Logo-word-My">My</h1>
                    <h1 className="Logo-word-Book">Book</h1>
                </div>
                <div className="header-content">
                    <p>
                    </p>
                </div>
           </section>
        </div> 
        </header>
        <hr></hr>
    </div>
    )
}
export default Home