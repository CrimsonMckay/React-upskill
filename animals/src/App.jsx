import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
	const animals = ["bird", "cat", "gator", "dog", "cow", "horse"];

	return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
	const [animals, setAnimals] = useState([]);
	const handleClick = () => {
		setAnimals([...animals, getRandomAnimal()]);
	};
	console.log(animals);
	const renderedAnimals = animals.map((animal, index) => {
		return <AnimalShow type={animal} key={index} />;
	});
	return (
		<div>
			<button onClick={handleClick}>Add Animal</button>
			<div>{renderedAnimals}</div>
		</div>
	);
}

export default App;
