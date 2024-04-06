import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();
    const [name,setName]=useState('')
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = () => {
        const { email, password } = user;
    
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            alert("Please fill in both email and password fields");
        } else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
        } else {
            localStorage.setItem('email',email)
            axios.post("http://localhost:9002/login", user)
                .then(res => {
                    if (res.status === 200) {
                       // alert(res.data.message);
                      //  setLoginUser(res.data.user);
                      const userData = res.data.user;
                      console.log(userData.name)
                      setName(userData.name)
                      localStorage.setItem("user",JSON.stringify({uname:userData.name}))
                        navigate("/homepage");
                    } else {
                        // Show error message for incorrect credentials
                        // alert(res.data.message);
                        alert("...")
                    }
                })
                .catch(error => {
                    console.error("Error logging in:", error);
                    alert("Error logging in, please try again.");
                });
        }
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input 
                type="text" 
                name="email" 
                value={user.email} 
                onChange={handleChange} 
                placeholder="Enter your Email"
            />
            <input 
                type="password" 
                name="password" 
                value={user.password} 
                onChange={handleChange}  
                placeholder="Enter your Password" 
            />
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    );
};

export default Login;

