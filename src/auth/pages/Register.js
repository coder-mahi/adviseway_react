import React, { useState, useContext } from "react";
import "./Register.css";
function Register() {
    const handleRegister = () => {
        // Register logic here
    };
    return (
        <div className="register-page">
            <div className="register-container">
                <img src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif"></img>
                <form className="register-form">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <label for="role">Role:</label>
                    <select id="role" name="role" required>
                        <option value="user">User</option>
                        <option value="mentor">Mentor</option>
                        <option value="mentee">Mentee</option>
                    </select>

                    <button type="submit">Register</button>
                </form>

            </div>
        </div>
    )
}
export default Register;