import React from 'react';
import Logo from '../assets/Logo.svg'

function Header () {
    return (
        <header id="header">
            <div id="brand_logo">
                <a>
                    <img src={Logo} alt="brand-logo" />
                </a>
            </div>
            <nav id="header_nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="reservation">Reservations</a>
                    </li>
                    <li>
                        <a href="order-online">Order Online</a>
                    </li>
                    <li>
                        <a href="login">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;