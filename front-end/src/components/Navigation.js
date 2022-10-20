import {Link} from "react-router-dom";
import { useState } from "react";
import "./Navigation.css"
import MenuData from "../Data/Menudata";
import { GoThreeBars } from "react-icons/go";
import { HiOutlineHome,HiOutlineChatAlt } from "react-icons/hi";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BiCategory,BiWindowClose } from "react-icons/bi";


const Navigation=()=>{
    const [showMenu,setShowMenu]=useState(false)
    const toggleMenu =()=>setShowMenu(!showMenu) //Change the bool when click the GoThreeBars Logo
    return(
        <aside>
            <div className='navbar'>
                <div className='navbar-toggle'>
                    <Link to="#" className='manu-bar'> {/*The onclick event occurs when the user clicks on an element.*/}
                        <GoThreeBars onClick={toggleMenu}/>
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "nav-menu active":"nav-menu" }>  {/*Condition coding---keyword(Ternary operator) */}
                <ul className="nav-menu-item" onClick={toggleMenu}> 

                    <div className="navbar-sign"> 
                        <Link to='/sign-in' className="navbar-sign-in">
                            Sign In
                        </Link>
                        <Link to='/sign-up' className="navbar-sign-up">
                            Sign Up
                        </Link>    
                    </div>
                    <li className="navbar-toggle">
                        <Link to="#" className="manu-bar">
                            <BiWindowClose onClick={toggleMenu} />
                        </Link>
                    </li>
                    {MenuData.map((menu,index)=>{
                        return(
                            <li className="menu-txt" key={index}>
                                <Link to={menu.path}>
                                    {menu.icon}<span> {menu.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}
export default Navigation