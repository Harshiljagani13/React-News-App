import { NavLink } from 'react-router-dom';
import React from 'react';
import '../App.css';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mx-auto navbar-dark  ">
            <div className="container-fluid ">
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
                        <li className="nav-item px-4">
                            <NavLink className="navbarlink" to="/other">
                                OTHER
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
