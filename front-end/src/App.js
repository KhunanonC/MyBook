import Navigation from "./components/Navigation";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import SignIn from './components/Page/SignIn';
import SignUp from './components/Page/SignUp';
import Home from './components/Page/Home';
import Collection from './components/Page/Collection';
import Sellbook from './components/Page/SellBook';
import Chatbook from './components/Page/Chatbook';

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route exact path="/sign-in" element={<SignIn/>}/>
          <Route exact path="/sign-up" element={<SignUp/>}/>
          <Route exact path='/' element={<Home/>}/>        {/* exact made website know that's the 1st page */}
          <Route exact path="/collection" element={<Collection/>}/>
          <Route exact path="/sell-book" element={<Sellbook/>}/>
          <Route exact path="/chatbook" element={<Chatbook/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;