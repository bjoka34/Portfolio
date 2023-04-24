import { useState } from "react";
import "./App.css";
import Card from "./Card";

type Projects = {
	id: number;
	title: string;
	images: Images[];
	image: string;
	description: string;
	git: string;
};
type Images = {
	id: number;
	link: string;
};

function App() {
	const [overlay, setOverlay] = useState(-1);
	const projects: Projects[] = [
		{
			id: 0,
			title: "Chat Application",
			images: [
				{
					id: 0,
					link: "https://i.imgur.com/zZfzhf3.png",
				},
				{
					id: 1,
					link: "https://i.imgur.com/zqoZb78.png",
				},
				{
					id: 2,
					link: "https://i.imgur.com/5abyYap.png",
				},
			],
			git: "https://gitlab.com/bjoka26/chat-application",
			image: "https://i.imgur.com/zZfzhf3.png",
			description:
				"The core feature of the application is its real-time chat functionality, which allows users to communicate with one another in real-time. This was achieved by implementing socket.io, a library that enables real-time, bidirectional, and event-based communication between the client and server.",
		},
		{
			id: 1,
			title: "VEGA IT Internship assingment",
			images: [
				{
					id: 0,
					link: "https://i.imgur.com/CU7Z3QV.png",
				},
				{
					id: 1,
					link: "https://i.imgur.com/mNfwkXI.png",
				},
			],
			git: "https://gitlab.com/bjoka26/expense-tracker-vegait-internship",
			image: "https://i.imgur.com/CU7Z3QV.png",
			description:
				"The core feature of the application is its real-time chat functionality, which allows users to communicate with one another in real-time. This was achieved by implementing socket.io, a library that enables real-time, bidirectional, and event-based communication between the client and server.",
		},
		{
			id: 2,
			title: "To Do App",
			images: [
				{
					id: 0,
					link: "https://i.imgur.com/m6SPNjk.png",
				},
				{
					id: 1,
					link: "https://i.imgur.com/o2y8qRU.png",
				},
			],
			git: "https://gitlab.com/bjoka26/to-do-app",
			image: "https://i.imgur.com/m6SPNjk.png",
			description:
				"The core feature of the application is its real-time chat functionality, which allows users to communicate with one another in real-time. This was achieved by implementing socket.io, a library that enables real-time, bidirectional, and event-based communication between the client and server.",
		},
	];

	const [projectImage, setProjectImage] = useState("");

	return (
		<div className="root">
			{overlay !== -1 && (
				<div className="overlay">
					<button className="close-overlay" onClick={() => setOverlay(-1)}>
						Go Back
					</button>

					<div
						className="slider"
						style={{ backgroundImage: `url(${projectImage})` }}
					>
						<div className="images-remote">
							{projects[overlay].images.map((image: Images) => {
								return (
									<div
										className="remote-dot"
										onClick={() => setProjectImage(image.link)}
									></div>
								);
							})}
						</div>
					</div>
					<p className="description">
						The core feature of the application is its real-time chat
						functionality, which allows users to communicate with one another in
						real-time. This was achieved by implementing socket.io, a library
						that enables real-time, bidirectional, and event-based communication
						between the client and server.<br></br>
						<br></br>
						In addition to the chat functionality, the application also features
						a user-friendly interface built with React. The use of React allows
						for efficient updates and renders, ensuring a smooth and responsive
						user experience. The application also uses TypeScript, a typed
						superset of JavaScript, to add optional static typing to the
						codebase, making it more reliable and easier to maintain.
					</p>
					<a
						href={projects[overlay].git}
						className="view-github"
						target="_blank"
						onClick={() => setOverlay(-1)}
					>
						View on GitLab
					</a>
				</div>
			)}
			<div className="title-container">
				<div className="image-container">
					<div className="circle"></div>
					<div className="profile-image"></div>
				</div>
				<h1 className="title">
					{"<>"}Welcome to<br></br> my portfolio{"</>"}
				</h1>
			</div>

			<div className="section">
				<div className="projects">
					{projects.map((project: any) => {
						return (
							<Card
								project={project}
								setProjectImage={setProjectImage}
								setOverlay={setOverlay}
							/>
						);
					})}
				</div>
				<div className="about-me">
					<p>
						I am a Front-end React developer of 23 years old. For almost a year,
						I've been honing my development skills. I finished an internship
						with Vega IT, where I was able to improve my skills and gain a
						deeper understanding of how Javascript and React work. This
						experience has allowed me to become a more experienced and capable
						developer. Last year, I also finished a UX design course with the
						Alicorn digital agency, which assisted me in creating more appealing
						and user-friendly web applications.
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
