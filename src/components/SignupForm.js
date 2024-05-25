import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) =>{

    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState("student");

    const [formData , setFormData] = useState({
        firstName:"", lastName:"", email:"", password:"", confirmPassword:""
    })
    const [showPassword , setShowPassword] = useState(false)
    const [showPassword1 , setShowPassword1] = useState(false)

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
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");

    }
    return(
        <div className="" >
            <div className="flex bg-richblack-800 p-1 mt-4 gap-x-1 rounded-full max-w-max ">
                <button
                    onClick={() => setAccountType("student")}
                    className={`${
                        accountType === "student"
                          ? "bg-richblack-900 text-richblack-5"
                          : "bg-transparent text-richblack-200 "
                        } 
                        py-2 px-5 rounded-full transition-all duration-200`
                        }>
                    Student
                </button>

                <button 
                    onClick={() => setAccountType("instructor")}
                    className={`${
                      accountType === "instructor"
                        ? "bg-richblack-900 text-richblack-5"
                        : "bg-transparent text-richblack-200 "
                        } 
                        py-2 px-5 rounded-full transition-all duration-200`
                    }
                >
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler} >
                {/* name */}
                <div className="flex gap-x-4 mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            First name<sup className="text-pink-200">*</sup></p>
                        <input 
                            required
                            type="text"
                            value={formData.firstName}
                            onChange={changeHandler}
                            name="firstName"
                            placeholder="Enter First Name"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                            >
                        </input>
                    </label>
                    <label className="w-full">
                        <p 
                            className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Last name
                            <sup className="text-pink-200">*</sup></p>
                        <input 
                            required
                            type="text"
                            value={formData.lastName}
                            onChange={changeHandler}
                            name="lastName"
                            placeholder="Enter Last Name"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                            >
                        </input>
                    </label>
                </div>
                {/* email */}
                <div className="mt-[20px]" >
                    <label className="w-full">
                        <p 
                            className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Email Address
                            <sup className="text-pink-200">*</sup></p>
                        <input 
                            required
                            type="email"
                            placeholder=" Enter email id"
                            value={formData.email}
                            onChange={changeHandler}
                            name="email"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        >
                        </input>
                    </label>
                </div>
                {/* password */}
                <div className="flex gap-x-4 mt-[20px]">
                    <label className="w-full relative">
                        <p 
                            className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Create password
                            <sup className="text-pink-200">*</sup></p>
                        <input 
                            required
                            type={showPassword ? ("text"):("password")}
                            placeholder=" Enter Password"
                            value={formData.password}
                            onChange={changeHandler}
                            name="password"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        >
                        </input>
                        <span 
                            onClick={()=> setShowPassword((prev)=>!prev)}
                            className="absolute right-3 top-[38px] cursor-pointer z-10">
                        {
                            showPassword ?
                            (<AiOutlineEye fontSize={24} fill="#AFB2BF" />):
                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                        }
                        </span>
                    </label>
                    <label htmlFor="" className="w-full relative">
                        <p 
                            className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                            Confirm Password
                            <sup className="text-pink-200">*</sup>
                        </p>
                        <input 
                            required
                            type={showPassword1 ? ("text"):("password")}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            name="confirmPassword"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                        >
                        </input>
                        <span 
                            onClick={()=> setShowPassword1((prev)=>!prev)}
                            className="absolute right-3 top-[38px] cursor-pointer z-10"
                        >
                        {
                            showPassword1 ?
                            (<AiOutlineEye fontSize={24} fill="#AFB2BF" />):
                            (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                        }
                        </span>
                    </label>
                </div>
                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
                    Create Account
                </button>
            </form>
        </div>
    )
}
export default SignupForm