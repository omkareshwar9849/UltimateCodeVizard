import React from 'react';
import '../../src/App.css';
import logo from "../images/logo2.png";
import LoginForm from './LoginForm';
import CustomCursor from './CustomCursor';

function Header() {
    return (
        
        <section id="header">
            <CustomCursor/>

            <a href="/"><img id='mainLogo' src={logo} alt="" /></a>

            <div>
                <ul id="navbar">
                    <li><a className="active" href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li id="lg-bag"><a href="cart.html"><i className="far fa-shopping-bag"></i></a></li>
                    <a href="/" id="close"><i className="far fa-times"></i></a>
                </ul>
            </div>
            <div id="mobile">
                <a href="cart.html"><i className="far fa-shopping-bag"></i></a>
                <i id="bar" className="fas fa-outdent"></i>
            </div>
        </section>
    );
}

export default Header;
