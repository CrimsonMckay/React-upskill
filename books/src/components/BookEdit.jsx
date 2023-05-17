import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookEdit({ book, onSubmit }) {
	const [title, setTitle] = useState(book.title);
	const { editBookById } = useBooksContext();
	const handleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit();
		editBookById(book.id, title);
	};
	return (
		<form className="book-edit" onSubmit={handleSubmit}>
			<label>Title</label>
			<input value={title} className="input" onChange={handleChange} />
			<button className="button is-primary">save</button>
		</form>
	);
}