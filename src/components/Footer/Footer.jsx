import { Link } from "react-router-dom";
import "./Footer.css";
import {
	FaClock,
	FaEnvelope,
	FaPhoneAlt,
	FaMapMarkerAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/header/wellness.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* About */}
				<div className="footer-col">
					<img
						src={footerLogo}
						alt="Maira Logo"
						className="footer-logo"
					/>

					<p className="footer-text">
						Redefining Confidence, Enhancing Beauty. At Maira
						Skin & Hair Clinic, we blend advanced technology
						with personalized care to provide exceptional
						hair, skin, laser, and weight management
						solutions.
					</p>
				</div>

				{/* Services */}
				<div className="footer-col">
					<h3 className="footer-title">Our Services</h3>
					<ul className="footer-list">
						<li>Weight Management</li>
						<li>Laser Hair Reduction</li>
						<li>Skin</li>
						<li>Hair</li>
					</ul>
				</div>

				{/* Useful Links */}
				<div className="footer-col">
					<h3 className="footer-title">Useful Links</h3>
					<ul className="footer-list">
						<li>
							<Link to="/privacy">Privacy Policy</Link>
						</li>
						<li>
							<Link to="/terms">Terms and Conditions</Link>
						</li>
						<li>
							<Link to="/disclaimer">Disclaimer</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/faq">FAQ</Link>
						</li>
					</ul>
				</div>

				{/* Appointment */}
				<div className="footer-col">
					<h3 className="footer-title">Make Appointment</h3>

					<p className="footer-item">
						<FaClock /> 10 AM - 8 PM , Monday - Sunday
					</p>

					<p className="footer-item">
						<FaEnvelope /> info@mairawellness.com
					</p>

					<p className="footer-item">
						<FaPhoneAlt /> +91 96207 62625
					</p>

					<div className="footer-social">
						<a
							className="footer-icon facebook"
							href="https://www.facebook.com/share/1AqAdcMMXa/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-facebook-f"></i>
						</a>

						<a
							className="footer-icon instagram"
							href="https://www.instagram.com/mairawellnesss?igsh=Y3N4YWZwdmpoNXVr"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-instagram"></i>
						</a>

						<a
							className="footer-icon youtube"
							href="https://youtube.com/@mairaclinic533?si=KylXW2eS-KkLb6U6"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-youtube"></i>
						</a>
					</div>
				</div>

				{/* Branches */}
				<div className="footer-col">
					<h3 className="footer-title">Our Branches</h3>

					<p className="footer-branch">
						<FaMapMarkerAlt />
						JP Nagar <br />
						14, Maira Health Care, 100Feet Road, Barbique
						Nation, J.P Nagar 4th Phase, Bangalore: 560078
					</p>

					<p className="footer-branch">
						<FaMapMarkerAlt />
						HSR Layout <br />
						Maira HealthCare, No 2737/1, 3rd floor, 27 Main
						Road, 1st sector, HSR Layout, Bengaluru – 560102
					</p>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="footer-bottom">
				<div className="text_content">
					<p>All Rights Reserved by Digineosoft</p>
					<p>Copyright © 2025. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
