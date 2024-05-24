import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg"
import toast from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
    return(
        <div className="flex justify-evenly">
            <Link to="/" >
                <img src={logo} alt="logo" height={32} width={160} loading="lazy"/>
            </Link>
            <nav className="flex gap-3" >
                <ul className="flex gap-3">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-3">
                {   
                    !isLoggedIn &&
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>   
                }
                {
                    isLoggedIn &&
                    <Link to="/">
                        <button
                            onClick={()=>{
                                setIsLoggedIn(false)
                                toast.success("Logout Sucessfully")
                            }}
                        >
                            Log Out</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}
export default Navbar


