import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"
import { Link } from "react-router-dom";
function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>Blog App</h3>
            <nav ref={navRef}>

                <Link to="/" >Home</Link>
                <Link to="/about" >About us</Link>
                <Link to="/blog" >Blog</Link>
                <Link to="/login" >Login</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
           
            

            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header;