import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link , useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = (props) => {

    const [formData,setFormData] = useState({
        email:"",password:""
    })
    
    const setIsLoggedIn = props.setIsLoggedIn;

    const chageHandler = (event) =>{
        setFormData((prev) => ({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }

    const [showPassword , setShowPassword] = useState(false)

    const navigate = useNavigate();

    const submitHandler = (event) =>{
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input 
                        required
                        type="email"
                        placeholder=" Enter email id"
                        value={formData.email}
                        onChange={chageHandler}
                        name="email"
                    >
                    </input>
                </label>

                <label>
                    <p>Password<sup>*</sup></p>
                    <input 
                        required
                        type={showPassword ? ("text"):("password")}
                        placeholder=" Enter Password"
                        value={formData.password}
                        onChange={chageHandler}
                        name = "password"
                    >
                    </input>
                    <span onClick={()=> setShowPassword((prev)=>!prev)}>
                        {
                            showPassword ?
                            (<AiOutlineEyeInvisible />):
                            (<AiOutlineEye/>)
                        }
                    </span>
                    <Link to="#">
                        <p>Forget Password</p>
                    </Link>
                </label>
                <button>
                    Sign In
                </button>
            </form>
        </div>
    )
}
export default LoginForm











