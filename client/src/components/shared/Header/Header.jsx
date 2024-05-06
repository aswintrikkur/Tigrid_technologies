import React from "react";
import "./Header.scss";

export const Header = () => {
	return (
		<div className="header-container">
			<div className="logo">
				<img src="/images/logo-black.png" alt="logo" />
			</div>

			<div className="navbar">
				<a href="#home">HOME</a>
				<a href="#about">ABOUT US</a>
				<a href="#offers">BEST OFFERS</a>
				<a href="#destinations">best destinations</a>
				<a href="#guide">Easy Guide</a>
				<a href="#gallery">GALLERY</a>
				<a href="">FAQ</a>
				<a href="#contact">Contact</a>
			</div>
		</div>
	);
};
