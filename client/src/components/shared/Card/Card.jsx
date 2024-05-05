import React from "react";
import "./Card.scss";
import { PrimaryButton } from "../Button/Button";

export const PrimaryCard = ({ src }) => {
	return (
		<div className="primary-card-container">
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

export const SecondaryCard = ({ src, rating, title, price }) => {
	return (
		<div className="secondary-card-container">
			<img src={src} alt="" />

			<div className="content">
				<div className="rating">
					<img src="/icons/icon-star.png" alt="starIcon" />
					<p>{rating || "4.5"}</p>
				</div>
				<div className="title">
					<p>{title || "Lorem Ipsum"}</p>
				</div>
				<div className="price">
					<p>
						${price || "1840"} <span> Per Person</span>
					</p>
				</div>
				<PrimaryButton style="2" text="Lorem Ipsum" fontLight width="100%" />
			</div>
		</div>
	);
};

export const Card3 = ({ src }) => {
	return (
		<div className="card3-container">
			<div className="icon">
				<img src={src} alt="icon" />
			</div>
			<h5>Lorem Ipsum</h5>
		</div>
	);
};

export const ReviewCard = ({src}) => {
	return (
		<div className="review-card-container">
			<div className="profile-pic">
				<img src={src} alt="profile" />
			</div>
			<div className="review">
				<h6>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's
				</h6>
				<div className="user">
					<h5>Lorem Ipsum</h5>
					<p>Youtube Blogger</p>
				</div>
			</div>
		</div>
	);
};
