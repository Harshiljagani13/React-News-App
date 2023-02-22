import { NavLink } from 'react-router-dom';
import React from 'react';
import '../App.css';
function Navbar() {
    return (
        <>
            <div className="logo1">
                <img src="https://timenews.co.in/wp-content/uploads/2019/07/logo-1.png" className="logo" alt="Time News" />
            </div>
            <div className="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-link bg-dark navbar-dark  ">
                    <div className="container ">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item px-4">
                                    <NavLink className="navbarlink" to="/">
                                        HOME
                                    </NavLink>
                                </li>
                                <br />
                                <li className="nav-item px-4">
                                    <NavLink className="navbarlink" to="/corona">
                                        CORONA
                                    </NavLink>
                                </li>
                                <br />
                                <li className="nav-item px-4">
                                    <NavLink className="navbarlink" to="/world">
                                        WORLD
                                    </NavLink>
                                </li>
                                <br />
                                <li className="nav-item px-4">
                                    <NavLink className="navbarlink" to="/gujarat">
                                        GUJARAT
                                    </NavLink>
                                </li>
                                <br />
                                <li className="nav-item px-4">
                                    <NavLink className="navbarlink" to="/ahmedabad">
                                        AHMEDABAD
                                    </NavLink>
                                </li>
                                <br />
                                <li className="nav-item px-4">
                                    <NavLink className="navbarlink" to="/business">
                                        BUSINESS
                                    </NavLink>
                                </li>

                                <br />
                                <li className="nav-item px-4">
                                    <NavLink className="navbarlink" to="/technology">
                                        TECHNOLOGY
                                    </NavLink>
                                </li>
                                <br />
                                <li className="nav-item dropdown">
                                    <NavLink
                                        className="navbarlink px-4 dropdown-toggle"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        OTHER
                                    </NavLink>
                                    <ul className="dropdown-menu ">
                                        <li>
                                            <NavLink className="dropdown-item navbar-link " to="/food">
                                                FOOD
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item navbar-link" to="/entertainment">
                                                ENTERTAINMENT
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item navbar-link " to="/beauty">
                                                BEAUTY
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
