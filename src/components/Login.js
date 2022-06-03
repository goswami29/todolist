import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);

    const login = () => {
        if (!email || !password) {
            setErrorMsg(true);
            return false;
        }

        const user = JSON.parse(localStorage.getItem('userRegister'));
        if (user) {
            if (user.email === email && user.password === password) {
                localStorage.setItem('session', JSON.stringify({user}));
                navigate('/todo');
            } else {
                setErrorMsg(true);
            }
        } else {
            setErrorMsg(true);
        }

    }

    return (
        <div className="register">
            <h1>Login Form</h1>
            {errorMsg ? <span className="invalid-input">Invalid Email Or Password </span> : ''}
            <input type="text" className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
            {errorMsg && !email ? <span className="invalid-input">Email is required </span> : ''}

            <input type="password" className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
            {errorMsg && !password ? <span className="invalid-input">Password is required </span> : ''}

            <button className="appButton" onClick={login}> Login </button>
        </div>
    )
}

export default Login