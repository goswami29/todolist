import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('session');
    const session = JSON.parse(localStorage.getItem('session'));
    const navigate = useNavigate();
   
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div>
            <h2 className="logo">Todo List App</h2>
            {auth ?
                <ul className="nav-ul">
                    <li><Link to="todo">Todo List</Link></li>
                    <li><Link onClick={logout} to="/">Logout  ( {session? session.user.name : '' } )</Link></li>
                </ul>
                : 
                <ul className="nav-ul">
                    <li><Link to="/">Register</Link></li>
                    <li><Link to="login">Login</Link></li>
                    <li><Link to="form">Form</Link></li>
                    <li><Link to="productlisting">Products</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav