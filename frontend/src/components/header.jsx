import React, {useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../src/App.css';
import logo from "../images/logo2.png";
import LoginForm from './LoginForm';
import CustomCursor from './CustomCursor';

function Header() {


    return (
        
        <section id="header" >
            <CustomCursor />

            <Link to="/"><img id='mainLogo' src={logo} alt="" /></Link> {/* Replace anchor tag with Link */}

            <div>
                <ul id="navbar">
                    <li className='navigators'><Link to="/" className="active">Home</Link></li> {/* Replace anchor tag with Link */}
                    <li className="dropdown navigators">
                    <a href="#" className="dropdown-toggle ">Feature</a>
                        <ul className="dropdown-menu ">
                            <li className='dropdown-links'><Link to="/feature/codegenerator">Code Generator</Link></li>
                            <li className='dropdown-links'><Link to="/feature/errorhandler">Error Handler</Link></li>
                            <li className='dropdown-links'><Link to="/feature/codereview">Code Review</Link></li>
                            <li className='dropdown-links'><Link to="/feature/timecomplexity">Time Complexity</Link></li>
                            <li className='dropdown-links'><Link to="/feature/codeconverter">Code Converter</Link></li>
                            <li className='dropdown-links'><Link to="/feature/codeefficiency">Code Efficiency</Link></li>
                            <li className='dropdown-links'><Link to="/feature/sqlconvert">Sql Converter</Link></li>
                        </ul>
                    </li>
                   
                </ul>
            </div>
        </section>
    );
}

export default Header;
