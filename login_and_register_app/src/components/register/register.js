import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user;
    
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!name || !email || !password || !reEnterPassword) {
            alert("Please fill in all fields");
        } else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
        } else if (password !== reEnterPassword) {
            alert("Passwords do not match");
        } else {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message);
                    history("/login");
                })
                .catch(error => {
                    console.error("Error registering:", error);
                    alert("Error registering, please try again.");
                });
        }
    }
    
    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history("/login")}>Login</div>
        </div>
    )
}

export default Register