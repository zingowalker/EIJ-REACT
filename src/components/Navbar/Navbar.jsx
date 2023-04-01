import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    {/* <img src='./logo.jpg' alt="logo" /> */}
                    EIJ
                </a>
                <div
                    className={isOpen ? "menu-icon open" : "menu-icon"}
                    onClick={handleToggle}
                >
                    <div className="menu-icon__line"></div>
                    <div className="menu-icon__line"></div>
                    <div className="menu-icon__line"></div>
                </div>
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="true"
                            aria-controls="dropdown1"
                            className="nav-item"
                        >
                            Destination<span className="arrow nav"></span>
                        </button>
                        <ul className="dropdown" id="dropdown1">
                            <li>
                                <a className="nav-link" href="#">Ladakh</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">South India</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Himalay</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
