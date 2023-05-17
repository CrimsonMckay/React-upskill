import React from "react";
//import PropTypes from "prop-types";
import className from "classnames";

export default function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	...rest
}) {
	const classes = className(
		rest.className,
		"px-3 py-1.5 border flex items-center justify-center w-auto ",
		{
			"border-blue-500 bg-blue-500 text-white ": primary,
			"border-gray-900 bg-gray-900 text-white": secondary,
			"border-green-500 bg-green-500 text-white": success,
			"border-yellow-500 bg-yellow-500 text-white": warning,
			"border-red-500 bg-red-500 text-white": danger,
			"rounded-full": rounded,
			"bg-white": outline,
			"text-blue-500": outline && primary,
			"text-gray-900": outline && secondary,
			"text-green-500": outline && success,
			"text-yellow-500": outline && warning,
			"text-red-500": outline && danger,
		}
	);
	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
}
Button.propTypes = {
	checkVariationValue: ({
		primary = false,
		secondary = false,
		success = false,
		warning = false,
		danger = false,
	}) => {
		const values = [primary, secondary, success, warning, danger].filter(
			Boolean
		);

		if (values.length > 1) {
			throw new Error(
				"Only one of primary, secondary, success, warning, danger can be true"
			);
		}
	},
};
