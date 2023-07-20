import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send login details to the backend server
            const response = await axios.post('http://localhost:3001/api/login', {
                username,
                password,
            });
            console.log(response.data); // You can handle the response data as needed

            // Reset form fields
            setUsername('');
            setPassword('');
            navigate('/home')

        } catch (error) {
            console.error(error);
            alert("LogIn Failed!")
            // Handle error cases
        }
    };

    return (
        <div className="container-login">
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group-login">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group-login">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="button-login"   type="submit">Login</button>
            </form>
            <p>
                New user? <Link to="/signin">Sign up here</Link>
            </p>
        </div>
        </div>
    );
};

export default LoginForm;
