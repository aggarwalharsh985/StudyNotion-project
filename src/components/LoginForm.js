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
        <form 
            onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6 "
            >
            <label
                className="w-full ">
                <p
                    className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                    Email Address<sup className="text-pink-200">*</sup>
                </p>
                <input 
                    required
                    type="email"
                    placeholder=" Enter email id"
                    value={formData.email}
                    onChange={chageHandler}
                    name="email"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-y-richblack-5 border-b-2"
                >
                </input>
            </label> 

            <label
                className="w-full relative">
                <p 
                    className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password
                    <sup>*</sup></p>
                <input 
                    required
                    type={showPassword ? ("text"):("password")}
                    placeholder=" Enter Password"
                    value={formData.password}
                    onChange={chageHandler}
                    name = "password"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border-y-richblack-5 border-b-2"
                >
                </input>
                <span onClick={()=> setShowPassword((prev)=>!prev)} className="absolute right-3 top-[38px] cursor-pointer">
                    {
                        showPassword ?
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />):
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                    }
                </span>
                <Link to="#">
                    <p 
                        className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                        Forget Password
                    </p>
                </Link>
            </label>
            <button 
                className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
                Sign in
            </button>
        </form>
    )
}
export default LoginForm











