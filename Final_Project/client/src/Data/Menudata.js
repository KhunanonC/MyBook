import { HiOutlineHome,HiOutlineChatAlt } from "react-icons/hi";
import { TbShoppingCartDiscount } from "react-icons/tb";
import { BiCategory} from "react-icons/bi";

const MenuData =[
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
    {
        title:"Book Seller",
        path:'/sell-book',
        icon:<TbShoppingCartDiscount/>
    },
    {
        title:"Chatbook",
        path:'/chatbook',
        icon:<HiOutlineChatAlt/>
    }
]
export default MenuData