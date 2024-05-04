import React from "react";
import "./Container.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Container = ({ children }) => {
	return (
		<div className="higher-order-container">
			<Header />
			{children}
			<Footer />
		</div>
	);
};
