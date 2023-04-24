import React, { SetStateAction } from "react";
import "./App.css";

interface Props {
	setOverlay: React.Dispatch<SetStateAction<number>>;
	setProjectImage: React.Dispatch<SetStateAction<string>>;
	project: any;
}

const Card = ({ setOverlay, project, setProjectImage }: Props) => {
	const setFunction = () => {
		setProjectImage(project.images[1].link);
		setOverlay(project.id);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			style={{ backgroundImage: `url(${project.image})` }}
			className="card"
			onClick={() => setFunction()}
		></div>
	);
};

export default Card;
