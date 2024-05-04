import React from "react";
import "./Header.scss";

export const Header = () => {
	return (
		<div className="header-container">
			<div className="logo"><img src="/images/logo.png" alt="logo" /></div>
      
			<div className="navbar">
				<p>HOME</p>
				<p>ABOUT US</p>
				<p>BEST OFFERS</p>
				<p>best destinations</p>
				<p>Easy Guide</p>
				<p>GALLERY</p>
				<p>FAQ</p>
				<p>Contact</p>
			</div>
		</div>
	);
};
