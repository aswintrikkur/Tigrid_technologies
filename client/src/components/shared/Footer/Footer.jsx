import React from "react";
import "./Footer.scss";
import { PrimaryButton } from "../Button/Button";

export const Footer = () => {
	return (
		<div className="footer-container">
			<div className="logo">
				<img src="/images/logo_white.png" alt="logo-white" />
			</div>

			<div className="body">
				<div className="col1">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industry's{" "}
					</p>
					<hr />
					<div className="contact">
						<div>
							<img src="/icons/icon15.png" alt="" />
							<p>Lorem Ipsum is simply dummy text of the printing</p>
						</div>
						<div>
							<img src="/icons/icon16.png" alt="" />
							<p>Lorem Ipsum is printing</p>
						</div>
						<div>
							<img src="/icons/icon17.png" alt="" />
							<p> ************ </p>
						</div>
					</div>
				</div>
				<div className="col2">
					<h5>Lorem Ipsum </h5>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
				</div>
				<div className="col3">
					<h5>Lorem Ipsum </h5>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
				</div>
				<div className="col4">
					<h5>Lorem Ipsum </h5>
					<h6>Lorem Ipsum </h6>
					<h6>Lorem Ipsum </h6>
				</div>
				<div className="col5">
					<h5>Lorem Ipsum </h5>
					<PrimaryButton style="3" width="380px" text="Lorem Ipsum" fontLight />
					<PrimaryButton text="Lorem Ipsum" width="380px" />

					<div className="social-media">
						<img src="/icons/icon-fb.png" alt="icon" />
						<img src="/icons/icon-insta.png" alt="icon" />
						<img src="/icons/icon-yt.png" alt="icon" />
						<img src="/icons/icon-music.png" alt="icon" />
						<img src="/icons/icon-snap.png" alt="icon" />
					</div>
				</div>
			</div>
		</div>
	);
};
