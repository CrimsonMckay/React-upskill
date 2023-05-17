import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>

			<div className="container">
				<section className="section">
					<div className="columns">
						<div className="column is-4">
							<ProfileCard
								title="Alexa"
								handle="@alexa99"
								image={AlexaImage}
								description="Alexa was created by amazon"
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="Cortana"
								handle="@cortana48"
								image={CortanaImage}
								description="Cortana was created by microsoft"
							/>
						</div>
						<div className="column is-4">
							<ProfileCard
								title="siri"
								handle="@siri47"
								image={SiriImage}
								description="siri was created by Apple inc"
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
export default App;
