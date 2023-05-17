import React from "react";
import { DiGitBranch, DiCisco } from "react-icons/di";
import Button from "../Button";

export default function ButtonPage() {
	const handleClick = () => {
		console.log("hello");
	};
	return (
		<div>
			<div>
				<Button primary rounded onClick={handleClick}>
					<DiGitBranch />
					fork this
				</Button>
			</div>
			<div>
				<Button secondary outline>
					<DiCisco />
					Listen here boy
				</Button>
			</div>
			<div>
				<Button success>See Deal!</Button>
			</div>
			<div>
				<Button warning>Hide Ads!</Button>
			</div>
			<div>
				<Button danger>Something </Button>
			</div>
		</div>
	);
}
