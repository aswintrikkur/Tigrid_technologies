import React from "react";
import "./Button.scss";

export const PrimaryButton = ({ text, width, fontLight, style }) => {

  let backgroundColor;
  let color;

	if (style == 2) {
    backgroundColor= '#000000'
	}

	return (
		<div className="primary-button-container">
			<button style={{ width: width, fontWeight: fontLight ? "300" : "600",  backgroundColor } }>
				{text}
			</button>
		</div>
	);
};
