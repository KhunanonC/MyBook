import { HiOutlineHome,HiOutlineChatAlt } from "react-icons/hi";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BiCategory} from "react-icons/bi";

const MenuData =[
    // {
    //     title:"Sign In",
    //     path:'/sign-in',
    //     icon:<HiOutlineHome/>
    // },
    // {
    //     title:"Sign Up",
    //     path:'/sign-up',
    //     icon:<HiOutlineHome/>
    // },
    {
        title:"Home",
        path:'/',
        icon:<HiOutlineHome/>
    },
    {
        title:"Collection",
        path:'/collection',
        icon:<BiCategory/>
    },
    // {
    //     title:"Promotion",
    //     path:'/promotion',
    //     icon:<TbShoppingCartDiscount/>
    // },
    {
        title:"Chatbook",
        path:'/chatbook',
        icon:<HiOutlineChatAlt/>
    }
]
export default MenuData