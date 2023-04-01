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
                <div className={isOpen ? "menu-icon open" : "menu-icon"} onClick={handleToggle}>
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

                    <li className="nav-item">
                        <li className="nav-link dropdown-toggle">
                            Destination
                        </li>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item active">
                                <a href="/ladakh">Ladakh</a>
                            </li>
                            <li className="dropdown-item active">
                                <a href="/south-india">South India</a>
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