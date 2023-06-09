import React from "react";
import DropDown from "./components/DropDown";

export default function App() {
	const options = [
		{ label: "Red", value: "red" },
		{ label: "Green", value: "green" },
		{ label: "Blue", value: "blue" },
	];
	return <DropDown options={options} />;
}
