import React from "react";
import { useState } from "react";

export default function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState("");
	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	};
	const handleChange = (event) => {
		setTerm(event.target.value);
	};
	return (
		<div className="book-create">
			<form className="input" onSubmit={handleFormSubmit}>
				<input
					className="button"
					value={term}
					type="text"
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}
