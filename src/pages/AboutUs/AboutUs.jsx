import "./AboutUs.css";
import { AboutMariaClinic, OurExpertise, WhyChooseUs } from "./data";
import FormComponent from "../../components/FormComponent/FormComponent";
import { useState } from "react";

const AboutUs = () => {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div className="aboutUs">
			<div className="bgImage1">
				<div className="child1"></div>
			</div>
			{/* About Section */}
			<div className="aboutMariaWrapper">
				<div className="aboutMaria">
					<div className="contentSection">
						{AboutMariaClinic.map((ele, i) => (
							<div key={i} className="aboutSection">
								<h3>{ele.title}</h3>
								<h2>{ele.mainHeading}</h2>
								<p>{ele.description}</p>
							</div>
						))}
					</div>

					<div className="imageSection">
						<img
							src="https://mairawellness.com/wp-content/uploads/elementor/thumbs/laser-hair-removal-3-r8vu9uututj8oq87w3rkt01pf8ho4d9j6qc64y2arc.png"
							alt="Maira Clinic Treatment"
						/>
					</div>
				</div>
			</div>
			<div className="expertiseWrapper">
				<h2 className="sectionTitle">Our Expertise</h2>

				<div className="expertiseGrid">
					{OurExpertise.map((item, index) => (
						<div className="expertiseCard" key={index}>
							<img src={item.image} alt={item.title} />
							<h4>{item.title}</h4>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
			<div className="whyChooseWrapper">
				<div className="whyChooseInner">
					<div className="whyChooseContent">
						<h2 className="sectionTitle">
							{WhyChooseUs.title}
						</h2>

						<div className="whyPoints">
							{WhyChooseUs.points.map((point, index) => (
								<div className="whyPoint" key={index}>
									<span>✔</span>
									<div>
										<h5>{point.title}</h5>
										<p>{point.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="whyChooseImage">
						<img
							src={WhyChooseUs.image}
							alt={WhyChooseUs.title}
						/>
					</div>
				</div>
			</div>
			<div className="talkToOurExpertContainer">
				<h2>{"Talk To Our Expert"}</h2>
				<div className="talkToOurExpert">
					<div className="firstSection">
						<FormComponent />
					</div>

					<div
						className="secondSection"
						onClick={() => setShowVideo(true)}
					>
						<img
							src="https://mairawellness.com/wp-content/uploads/2025/07/laser1.png"
							alt="Laser Treatment"
						/>
						<div className="playOverlay">▶</div>
					</div>
				</div>
			</div>

			{/* VIDEO MODAL */}
			{showVideo && (
				<div className="videoModal">
					<div className="videoWrapper">
						<span
							className="closeBtn"
							onClick={() => setShowVideo(false)}
						>
							✕
						</span>

						<iframe
							src="https://www.youtube.com/embed/2-ctVIhbwYk?autoplay=1&rel=0"
							title="YouTube video"
							allow="autoplay; encrypted-media; fullscreen"
							allowFullScreen
						></iframe>
					</div>
				</div>
			)}
		</div>
	);
};

export default AboutUs;
