import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Reservation from './pages/Reservation';


function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <ul>
      <Link to="/register"><li>Register</li></Link>
      <Link to="/"><li>Login</li></Link>
    </ul>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/reservation" element={<Reservation></Reservation>}></Route>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
