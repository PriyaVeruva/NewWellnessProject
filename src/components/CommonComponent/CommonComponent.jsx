import "./CommonComponent.css";
import { useRef } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import FormComponent from "../FormComponent/FormComponent";
const CommonComponent = ({ data }) => {
	const scrollRef = useRef(null);
	const handleBookConsultation = () => {
		scrollRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};
	const excludedPaths = [
		"/weight/body-composition",
		"/skin/whitening",
		"/skin/radiant",
		"/skin/pigmentation",
		"/skin/melasma",
		"/skin/chemical-peel",
		"/skin/mole-wart",
		"/skin/under-eye",
		"/slimming/rf-therapy",
		"/slimming/figure-correction",
		"/slimming/body-therapies",
		"/slimming/body-toning",
		"/slimming/body-detox",
		"/slimming/lipo-laser",
		"/slimming/body-sculpting",
		"/slimming/breast-firming",
	];
	const pathNames = !excludedPaths.includes(window.location.pathname);
	return (
		<div className="spot-page">
			{/* HERO */}
			<div className="bgImage1">
				<img src={data.bgImage.image} alt="" />
				<div className="child1">{/* <h2>Services</h2> */}</div>
			</div>
			<section className="spot-hero">
				<div className="spot-hero-text">
					<h1>{data.hero.title}</h1>
					<p>{data.hero.subtitle}</p>
					<button onClick={handleBookConsultation}>
						Book Consultation
					</button>
				</div>
				<img src={data.hero.image} alt="Spot Reduction" />
			</section>

			{/* INTRO */}
			<div className="benefitsSection enquiryForm">
				<div className="form-section" ref={scrollRef}>
					<FormComponent />
				</div>
				<div className="benefits-content">
					<h2>Have Any Questions?</h2>
					<p className="benefits-subtext">
						Get expert advice specifically to your skin, hair,
						and weight management concerns today.
					</p>
					<p className="footer-item">
						<FaEnvelope /> info@mairawellness.com
					</p>

					<p className="footer-item">
						<FaPhoneAlt /> +91 96207 62625
					</p>
				</div>
			</div>
			{/* WHAT IS */}
			<section className="spot-section two-col">
				<img src={data.whatIs.image} alt="Treatment" />
				<div>
					<h1>{data.whatIs.title}</h1>
					<p>{data.whatIs.subtitle}</p>
				</div>
			</section>

			{/* TREATMENTS */}
			{pathNames ? (
				<section className="spot-section light-bg">
					<h2 className="center">{data?.treatments?.title}</h2>
					<div className="card-grid">
						{data?.treatments?.items?.map((ele, i) => {
							return (
								<div key={i} className="card">
									{ele}
								</div>
							);
						})}
					</div>
				</section>
			) : (
				<div className="analysis-section">
					<h3>{data.treatments.title}</h3>

					<div className="analysis-cards">
						{data.treatments.items.map((ele, i) => {
							return (
								<div className="analysis-card" key={i}>
									<img src={ele.image} alit="" />
									<h4>{ele.title}</h4>
									<p>{ele.subtitle}</p>
								</div>
							);
						})}
					</div>
				</div>
			)}
			{/* WHY MAIRA */}
			<div className="whyChooseWrapper">
				<div className="whyChooseInner">
					<div className="whyChooseContent">
						<h2 className="sectionTitle">
							{data.whyChoose.title}
						</h2>
						<div className="whyPoints">
							{data.whyChoose.points.map((ele, i) => {
								return (
									<div key={i} className="whyPoint">
										<h5>✔ {ele}</h5>
									</div>
								);
							})}
						</div>
					</div>
					<div className="whyChooseImage">
						<img src={data.whyChoose.image} alt={""} />
					</div>
				</div>
			</div>
			{/* BENEFITS */}
			<section className="spot-section">
				<h2 className="center">{data.benefits.title}</h2>
			</section>

			<section className="spot-section benefitsSection">
				<div className="benefits-wrapper">
					<div className="benefits-image">
						<img
							src={data.benefits.image}
							alt="Spot Reduction Treatment"
						/>
					</div>

					<div className="benefits-content">
						<h2>{data.benefits.subtitle}</h2>
						<p className="benefits-subtext">
							{data.benefits.description}
						</p>

						<div className="benefits-list">
							{data.benefits.points.map((ele, i) => {
								return (
									<div
										key={i}
										className="benefit-item"
									>
										{ele}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="spot-cta">
				<h2>{data.cta.title}</h2>
				<p>{data.cta.subtitle}</p>
				<button onClick={handleBookConsultation}>
					{data.cta.buttonText}
				</button>
			</section>
		</div>
	);
};

export default CommonComponent;
