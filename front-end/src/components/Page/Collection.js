import {useState,useEffect} from "react";
import './style/Collection.css';

const Collection=()=>{ 
    //state for get book info
    const [Countries,setCountries]=useState([]) 
    //state for searching
    const [Word,setWord]=useState("")
    //filter for searching
    const[DataFilter]= useState(["name","capital"]) //use 2 condition to find
    // this is detector form link.
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(data=>{
            setCountries(data)
        })
    },[])

    const searchCountries =(Countries)=>{
        return Countries.filter((item)=>{
            return DataFilter.some((filter)=>{
                if(item[filter]){
                    return (item[filter].toString().toLowerCase().indexOf(Word.toLowerCase())>-1) //>-1 mean we found
                }
            })
        })
    }
    return(
        <div className="container-collection">
            <div className="search-container">
                <div className="search-box">
                    <h1>เริ่มต้นหาหนังสือของคุณ</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae 
                        sapiente quibusdam consequatur perspiciatis facere laboriosam non nesciunt 
                        at id repudiandae, modi iste? Eligendi, rerum!
                    </p>
                    <label htmlFor="search-form">
                        <input type="text" 
                        className="search-input" 
                        placeholder="Find your book"
                        value={Word}
                        onChange={(e)=>setWord(e.target.value)}
                        />
                    </label>
                </div>
            </div>
            <h1>Newest Book</h1>
            <ul className="row">
            {searchCountries(Countries).map((item,index)=>{ //cearte
                return (
                    <li key={index}>
                        <div className="card-info">
                            <div className="card-info-title">
                                <img src={item.flag} alt={item.name}/>
                            </div>
                            <div className="card-info-body">
                                <div className="card-description">
                                    <h2>{item.name}</h2>
                                    <ol className="card-list">
                                        <li>Region :<span>{item.region}</span></li>
                                        <li>Capital :<span>{item.capital}</span></li>
                                        <li>Area :<span>{item.area}</span></li>
                                    </ol>
                                </div>
                            </div>
                        </div> 
                    </li> 
                )
            })}
            </ul>
        </div>
    )
}
export default Collection 