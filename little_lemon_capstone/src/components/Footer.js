import React from 'react';
import Logo from '../assets/Logo2.png'

function Footer () {
    return (
        <footer id="footer">
            <div id="footer_brand-logo">
                <a>
                    <img src={Logo} alt="brand-logo" height={300} width={150} />
                </a>
            </div>
            <nav id="footer_nav1">
                <h5>Doormat Navigation</h5>
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
            <nav id="footer_nav2">
                <h5>Contact</h5>
                <ul>
                    <li>
                        <a href="/address">Address</a>
                    </li>
                    <li>
                        <a href="/phone-number">Phone Number</a>
                    </li>
                    <li>
                        <a href="/email">Email</a>
                    </li>
                </ul>
            </nav>
            <nav id="footer_nav3">
                <h5>Social Media Links</h5>
                <ul>
                    <li>
                        <a href="/address">Address</a>
                    </li>
                    <li>
                        <a href="/phone-number">Phone Number</a>
                    </li>
                    <li>
                        <a href="/email">Email</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;