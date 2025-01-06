import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import { BsCartCheckFill } from "react-icons/bs";


export const Layout = () => {
    return (
        <>
            <div className='container'>
                <header className="header">
                    <Link to="/">
                        <h3>Rashed Store</h3>
                    </Link>

                    <nav className='navbar'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/cart">
                            <BsCartCheckFill className='my-4 mx-4 text-xl decoration-lime-300 cursor-pointer' />
                        </Link>

                    </nav>
                </header>
            </div>
            <Outlet />
        </>
    );
};

