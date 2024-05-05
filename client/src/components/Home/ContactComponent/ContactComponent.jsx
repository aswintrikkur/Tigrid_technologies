import React from "react";
import "./ContactComponent.scss";
import { Input } from "../../shared/Input/Input";
import { PrimaryButton } from "../../shared/Button/Button";

export const ContactComponent = () => {
	return (
		<div className="contact-component-container">
			<h2>Lorem Ipsum is simply dummy</h2>
			<h6>Lorem Ipsum is simply dummy text of the printing and </h6>
			<form action="">
				<div className="row1">
					<Input placeholder="Lorem Ipsum" type="text" />
					<Input placeholder="Lorem Ipsum" type="text" />
				</div>
				<div className="row2">
					<Input placeholder="Lorem Ipsum" type="text" />
					<Input placeholder="Lorem Ipsum" type="text" />
				</div>
				<div className="row3">
                    <textarea name="" id="" cols="30" rows="10">Lorem Ipsum </textarea>
				</div>
				<div>
					<PrimaryButton text="Send" width="320px" />
				</div>
			</form>
		</div>
	);
};
