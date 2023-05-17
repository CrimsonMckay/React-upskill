import React from "react";
import Accordion from "../Accordion";

export default function AccordionPage() {
	const items = [
		{
			id: "iuwedui",
			label: "Can i use React on a project",
			content: "React is ideal for any web application project",
		},
		{
			id: "jksdjksd",
			label: "Can i use Javascript on a project",
			content:
				"Depends on the usecase for web applications , javascript frameworks like React and node are good to go",
		},
		{
			id: "jksdd",
			label: "Can i use Css on a project",
			content: "Yes you can use traditional css but i recommend tailwind css",
		},
	];

	return <Accordion items={items} />;
}
