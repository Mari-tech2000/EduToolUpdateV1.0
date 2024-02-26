import { useRef } from "react";
import {Link} from 'react-router-dom';
import "U:/website/edutool/src/components/shared/style/style.css";
import React from 'react';
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>EDUTOOL</h3>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/about">About</Link>
				<Link to="/search">Search</Link>
                <Link to="/settings">Settings</Link>
		        <Link to="/events">Explore</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
				
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}
				>
			</button>
		</header>
	);
}

export default Navbar;