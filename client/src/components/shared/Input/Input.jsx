import React from "react";
import "./Input.scss";

export const Input = ({ type, placeholder, icon }) => {
	return (
		<div className="input-container">
			{icon && <img src={icon} alt="" />}
			{type === "dropdown" ? (
				<select name="" id="">
					<option value="">{placeholder}</option>
					<option value="">value 2</option>
					<option value="">value 3</option>
				</select>
			) : (
				<input type={type} placeholder={placeholder} />
			)}
		</div>
	);
};
