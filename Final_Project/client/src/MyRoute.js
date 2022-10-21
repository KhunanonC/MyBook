//ควบคุมเส้นทางในการเปลี่ยนหน้า
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Navigation from "./components/Navigation";

import SignUp from "./components/Page/SignUp";
import SignIn from "./components/Page/SignIn";
import Home from './components/Page/Home';
import Collection from './components/Page/Collection';
import SellBook from './components/Page/SellBook';
import Chatbook from './components/Page/Chatbook';
import Sellbook_post from "./components/Page/Sellbook_post";

const MyRoute=()=>{
    return(
        <div>
            <Router>
                <Navigation/>
                <Routes>
                    <Route exact path="/sign-up" element={<SignUp/>}/>
                    <Route exact path="/sign-in" element={<SignIn/>}/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/collection" element={<Collection/>}/>
                    <Route exact path="/sell-book" element={<SellBook/>}/>
                    <Route exact path="/chatbook" element={<Chatbook/>}/>
                    <Route exact path="/sell-book-post" element={<Sellbook_post/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default MyRoute;