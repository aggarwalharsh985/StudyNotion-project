import './App.css';
import Navbar from './components/Navbar'
import Home from './page/Home'
import Dashboard from './page/Dashboard'
import Login from './page/Login'
import Signup from './page/Signup'
import {Routes,Route} from "react-router-dom"
import { useState } from 'react';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
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
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
          />
      </Routes>
    </div>
  );
}

export default App;
