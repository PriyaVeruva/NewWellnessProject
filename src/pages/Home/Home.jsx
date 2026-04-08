import "./Home.css";
import { services, whyData, treatments } from "./data";

const Home = () => {
	return (
		<div className="home">
			{/* 🌿 HERO */}
			<section className="hero">
				<div className="hero-content">
					<h1>Breathe Pure. Live Better 🌿</h1>
					<p>
						Advanced Oxygen-Based Wellness for Skin, Hair &
						Body
					</p>

					<div className="hero-btns">
						<button className="primary">
							Book Appointment
						</button>
						<button className="secondary">
							Explore Services
						</button>
					</div>
				</div>

				{/* 🌬 Oxygen bubbles */}
				<div className="bubbles">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</section>

			{/* 🌊 WAVE */}
			<div className="wave"></div>

			{/* 🌿 SERVICES */}
			<section className="services">
				<h2>Our Services</h2>

				<div className="service-grid">
					{services.map((item, i) => (
						<div className="service-card" key={i}>
							<img src={item.image} alt={item.title} />
							<h3>{item.title}</h3>
						</div>
					))}
				</div>
			</section>

			{/* 🌿 WHY */}
			<section className="why">
				<h2>Why VO₂ Wellness</h2>

				<div className="why-grid">
					{whyData.map((item, i) => (
						<div className="why-card" key={i}>
							<h3>
								{item.icon} {item.title}
							</h3>
							<p>{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* 🌿 TREATMENTS */}
			<section className="treatments">
				<h2>Featured Treatments</h2>

				<div className="treatment-row">
					{treatments.map((t, i) => (
						<div key={i}>{t}</div>
					))}
				</div>
			</section>

			{/* 🌿 CTA */}
			<section className="cta">
				<div className="cta-box">
					<h2>Start Your Wellness Journey 🌿</h2>
					<p>
						Feel the power of oxygen therapy & natural healing
					</p>

					<button>Book Appointment</button>
				</div>

				{/* soft bubbles */}
				<div className="cta-bubbles">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</section>
		</div>
	);
};

export default Home;
