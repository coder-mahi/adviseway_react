import React,{useState,useContext} from "react";
import "./Login.css";
function Login(){
    const handleLogin=()=>{
        // login logic here
    };
    return (
        <div className="login-page">
            <div className="login-container">
            <img src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif"></img>
                <form className="login-form">
                    <label>Username:</label>
                    <input type="text" name="username" required />
                    <br />
                    <label>Password:</label>
                    <input type="password" name="password" required />
                    <br/>
                    <button onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login;