'use client';
import { useState } from "react";
import Link from "next/link"
import { HiXMark } from "react-icons/hi2";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {

    const [showMenu, setShowMenu] = useState(false);


    const handleMenu = () => {
        const navbar = document.getElementById("mainNavbar");
        setShowMenu(true);
        navbar.style.transform = "translateX(0%)";
        navbar.style.opacity = "10";
        navbar.style.visibility = "visible";
        navbar.style.display = "block";
        navbar.style.marginTop = "4rem";
    }

    const handleCloseMenu = () => {
        const navbar = document.getElementById("mainNavbar");
        setShowMenu(false);
        navbar.style.transform = "translateX(100%)";
        navbar.style.opacity = "0";
        navbar.style.visibility = "none";
        navbar.style.display = "none";
    }
    return (
        <>
            <div className="menu">
                {!showMenu && <AiOutlineMenu onClick={handleMenu} />}
                {showMenu && <HiXMark onClick={handleCloseMenu} />}
            </div>
            <nav className='main-nav' id="mainNavbar">
                <ul className="navbar">
                    <li><Link href="/" className="nav-links">Home</Link></li>
                    <li><Link href="/about" className="nav-links">about</Link></li>
                    <li><Link href="/" className="nav-links">portfolio</Link></li>
                    <li><Link href="/" className="nav-links">service</Link></li>
                    <li><Link href="/contact" className="nav-links">contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
