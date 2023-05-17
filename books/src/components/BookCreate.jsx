import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookCreate() {
	const [title, setTitle] = useState("");
	const { createBook } = useBooksContext();
	const handleOnCreate = (e) => {
		e.preventDefault();
		createBook(title);
	};
	const handleChange = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
	};

	return (
		<div className="book-create">
			<h3>Add a book</h3>
			<div onSubmit={handleOnCreate}>
				<form>
					<label>Title</label>
					<input className="input" value={title} onChange={handleChange} />
					<button className="button">Create!</button>
				</form>
			</div>
		</div>
	);
}
