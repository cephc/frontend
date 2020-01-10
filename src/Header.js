import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                To Do List
            </h1>
            <Link style = {linkStyle} to ="/signup"> Sign Up </Link> | <Link style = {linkStyle} to = "/signin"> Sign In </Link>
        </header>
    )
};

const linkStyle = {
    color: '#fff',
    textAlign: 'center',
};

const headerStyle = {
    background: '#808080',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
    padding: '20px',
    border: 'solid black'
};
