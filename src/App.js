import './App.css';
import Navbar from './components/Navbar'
import Home from './page/Home'
import Dashboard from './page/Dashboard'
import Login from './page/Login'
import Signup from './page/Signup'
import {Routes,Route} from "react-router-dom"
import { useState } from 'react';

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} ></Navbar>
      <Routes>
        <Route
        path="/" element={<Home></Home>}>
        </Route>
        <Route
        path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} ></Login>}
        ></Route>
        <Route
        path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}
        ></Route>
        <Route
        path="/Dashboard" element={<Dashboard></Dashboard>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
