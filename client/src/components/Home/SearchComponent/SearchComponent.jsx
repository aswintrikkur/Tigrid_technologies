import React from "react";
import "./SearchComponent.scss";
import { Input } from "../../shared/Input/Input";
import { PrimaryButton } from "../../shared/Button/Button";

export const SearchComponent = () => {
	return (
		<div className="search-component-container">
			<h4>Lorem Ipsum is simply dummy text </h4>

			<div className="input-container">
				<div className="col">
					<p>Lorem Ipsum </p>
					<Input type="dropdown" placeholder='Search Destination'/>
				</div>
				<div className="col">
					<p>Lorem Ipsum </p>
					<Input type="text" placeholder="No of people" />
				</div>
				<div className="col">
					<p>Lorem Ipsum </p>
					<Input type="text" placeholder="No of adults" />
				</div>
				<div className="col">
					<p>Lorem Ipsum </p>
					<Input type="number" placeholder="Enter your mobile no" />
				</div>
				<div className="col">
					<p>Lorem Ipsum </p>
					<Input type="date" placeholder="Date" />
				</div>
				<div className="col btn-col">
					<PrimaryButton text='Lorem Ipsum' width='320px' fontLight /> 
				</div>
			</div>
		</div>
	);
};
