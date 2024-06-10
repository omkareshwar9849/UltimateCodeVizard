import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../../src/App.css';
import logo from "../images/logo2.png";

const Header = ({ darkMode, toggleColorMode }) => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    };
    
    return (
        <section id="header" >
            <Link to="/UltimateCodeVizard"><img id='mainLogo' src={logo} alt="" /></Link> {/* Replace anchor tag with Link */}
            <div>
                <ul id="navbar">
                    {/* <button onClick={toggleColorMode} className="btn btn-secondary mx-2">
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button> */}
                    {!localStorage.getItem('token') ? (
                        <>

                            <Link className="golden-button mx-2" to="/login" role='button'>Login</Link>
                            <Link className="golden-button me-2" to="/signup" role='button'>SignUp</Link>
                            <div>
                                <input onClick={toggleColorMode} type="checkbox" class="checkbox" id="checkbox" />
                                <label for="checkbox" class="checkbox-label">
                                    <i class="fas fa-moon"></i>
                                    <i class="fas fa-sun"></i>
                                    <span class="ball"></span>
                                </label>
                            </div>
                        </>
                    ) : (
                        <>
                            <li className='navigators'><Link to="/" className="active">Home</Link></li>
                            <li className="dropdown navigators">
                                <a href="/" className="dropdown-toggle ">Feature</a>
                                <ul className="dropdown-menu ">
                                    <li className='dropdown-links'><Link to="/UltimateCodeVizard/feature/codegenerator">Code Generator</Link></li>
                                    <li className='dropdown-links'><Link to="/UltimateCodeVizard/feature/errorhandler">Error Handler</Link></li>
                                    <li className='dropdown-links'><Link to="/UltimateCodeVizard/feature/codereview">Code Reviewer</Link></li>
                                    <li className='dropdown-links'><Link to="/UltimateCodeVizard/feature/timecomplexity">Time Complexity</Link></li>
                                    <li className='dropdown-links'><Link to="/UltimateCodeVizard/feature/codeconverter">Code Converter</Link></li>
                                    <li className='dropdown-links'><Link to="/UltimateCodeVizard/feature/codeefficiency">Code Optimizer</Link></li>
                                    <li className='dropdown-links'><Link to="/UltimateCodeVizard/feature/sqlconvert">Sql Converter</Link></li>
                                </ul>
                            </li>

                            <div>
                                <input onClick={toggleColorMode} type="checkbox" class="checkbox" id="checkbox" />
                                <label for="checkbox" class="checkbox-label">
                                    <i class="fas fa-moon"></i>
                                    <i class="fas fa-sun"></i>
                                    <span class="ball"></span>
                                </label>
                            </div>

                            <button onClick={handleLogout} className="golden-button ms-3">Logout</button>

                        </>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default Header;
