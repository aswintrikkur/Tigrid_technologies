import React from "react";
import "./Card.scss";

export const PrimaryCard = ({src}) => {
	return (
		<div className="card-container">
			<div className="icon">
                <img src={src} alt="icon" />
            </div>
			<div className="content">
				<h6 className="title">Lorem Ipsum</h6>
				<p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
			</div>
		</div>
	);
};
