import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";



const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {
                    formType === "signup"?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
                }
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button>
                    Sign in with Google
                </button>
            </div>
            <div>
                <img 
                    src={frame}
                    alt="pattern"
                    width={558}
                    height={504}
                    loading="lazy"
                />

                <img 
                    src={image}
                    alt="image"
                    width={558}
                    height={504}
                    loading="lazy"
                />
            </div>
        </div>
    )
}
export default Template