import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) =>{

    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        firstName:"", lastName:"", email:"", password:"", confirmPassword:""
    })
    const [showPassword , setShowPassword] = useState(false)

    const changeHandler = (event) =>{
        setFormData((prev) => ({
            ...prev,
            [event.target.name]:event.target.value
        }))
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match")
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");

    }
    return(
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                {/* name */}
                <div>
                    <label>
                        <p>First name<sup>*</sup></p>
                        <input 
                            required
                            type="text"
                            value={formData.firstName}
                            onChange={changeHandler}
                            name="firstName"
                            placeholder="Enter First Name"
                            >
                        </input>
                    </label>
                    <label>
                        <p>Last name<sup>*</sup></p>
                        <input 
                            required
                            type="text"
                            value={formData.lastName}
                            onChange={changeHandler}
                            name="lastName"
                            placeholder="Enter Last Name"
                            >
                        </input>
                    </label>
                </div>
                {/* email */}
                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input 
                        required
                        type="email"
                        placeholder=" Enter email id"
                        value={formData.email}
                        onChange={changeHandler}
                        name="email"
                    >
                    </input>
                </label>
                {/* password */}
                <div>
                    <label>
                        <p>Create password<sup>*</sup></p>
                        <input 
                            required
                            type={showPassword ? ("text"):("password")}
                            placeholder=" Enter Password"
                            value={formData.password}
                            onChange={changeHandler}
                            name="password"
                        >
                        </input>
                        <span onClick={()=> setShowPassword((prev)=>!prev)}>
                        {
                            showPassword ?
                            (<AiOutlineEyeInvisible />):
                            (<AiOutlineEye/>)
                        }
                        </span>
                    </label>
                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input 
                            required
                            type={showPassword ? ("text"):("password")}
                            placeholder=" Enter confirm Password"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            name="confirmPassword"
                        >
                        </input>
                        <span onClick={()=> setShowPassword((prev)=>!prev)}>
                        {
                            showPassword ?
                            (<AiOutlineEyeInvisible />):
                            (<AiOutlineEye/>)
                        }
                        </span>
                    </label>
                </div>
                <button>
                    Create Account
                </button>
            </form>
        </div>
    )
}
export default SignupForm