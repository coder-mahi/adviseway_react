import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage("");

        const data = { username, password };

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Login successful!");
                // Store user info or token in localStorage/sessionStorage
                localStorage.setItem("user", JSON.stringify(result.user)); // Example of storing user info
                navigate("/dashboard"); // Redirect to the dashboard after login
            } else {
                setErrorMessage(result.message || "Login failed.");
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <img
                    src="https://cdn.pixabay.com/animation/2022/12/05/10/47/10-47-58-930_512.gif"
                    alt="Login Animation"
                />
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
