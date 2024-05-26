import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../src/App.css';
import logo from "../images/logo2.png";

const Header = ({ darkMode, toggleColorMode }) => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    };
    let location = useLocation();

    return (
        <section id="header" >
            <Link to="/"><img id='mainLogo' src={logo} alt="" /></Link> {/* Replace anchor tag with Link */}
            <div>
                <ul id="navbar">
                    <li className='navigators'><Link to="/" className="active">Home</Link></li>
                    <li className="dropdown navigators">
                        <a href="/" className="dropdown-toggle ">Feature</a>
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
                    {/* <div className='toggle-switch' onClick={toggleColorMode}>
                        <div className={`toggle-slider ${darkMode ? 'dark-mode' : 'light-mode'}`}></div>
                    </div> */}
                    <button onClick={toggleColorMode} className="btn btn-secondary mx-2">
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    {!localStorage.getItem('token') ? (
                            <form className="d-flex">
                                <Link className="golden-button mx-1" to="/login" role='button'>Login</Link>
                                <Link className="golden-button mx-1" to="/signup" role='button'>SignUp</Link>
                            </form>
                        ) : (
                            <button onClick={handleLogout} className="golden-button">Logout</button>
                        )}
                </ul>
            </div>
        </section>
    )
}

export default Header;