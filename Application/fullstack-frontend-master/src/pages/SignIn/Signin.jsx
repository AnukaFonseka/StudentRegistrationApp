import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import axios from 'axios';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send signup details to the backend server
            const response = await axios.post('http://localhost:3001/api/signup', {
                username,
                password,
            });
            console.log(response.data); // You can handle the response data as needed

            // Reset form fields
            setUsername('');
            setPassword('');
            alert("SignIn Success!")

        } catch (error) {
            console.error(error);
            alert('User already exists!')
            // Handle error cases
        }
    };

    return (
        <div className="container-login">
        <div className="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group-signup">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group-signup">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="button-signup" type="submit">Sign Up</button>
            </form>
            <p>
                Already registered? <Link to="/login">Login here</Link>
            </p>
        </div>
        </div>
    );
};

export default SignupForm;
