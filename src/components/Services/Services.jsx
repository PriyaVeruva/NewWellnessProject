import FormComponent from "../FormComponent/FormComponent";
import { bookAppointmentData, servicesData, servicesWeOffer } from "./data";
import "./Services.css";
const Services = () => {
	return (
		<div>
			<div className="bgImage1">
				<div className="child1">
					{/* <h2>Services</h2> for time beign just commented it out*/}
				</div>
			</div>
			<section>
				<h2>Our Services</h2>
			</section>
			<div className="servicesGrid">
				{servicesData.map((ele, i) => {
					return (
						<div key={i} className="serviceCard">
							<h3>
								{ele.servicesSection.subHeaderSection}
							</h3>
							<p>{ele.servicesSection.description}</p>
							<button className="serviceBtn">
								View All Services
							</button>
						</div>
					);
				})}
			</div>
			<div className="servicesOffer">
				{servicesWeOffer.map((ele, i) => {
					return (
						<div key={i} className="contentSection">
							<img src={ele.image} />
							<span>{ele.mainSection}</span>
							<span>{ele.subSection}</span>
						</div>
					);
				})}
			</div>
			<div className="bookAppointment">
				<div className="sections">
					<div className="firstSection">
						<h5>Book Now</h5>
						<h2>Make An Appointment</h2>
						<span>
							Once you book an appointment,our professional
							experts will cal you and give free
							consultation.
						</span>
						<h3>Opening Hours</h3>
						{bookAppointmentData.map((ele, i) => {
							return (
								<div key={i} className="timings">
									<span>{ele.day}</span>
									<span>{ele.timings}</span>
								</div>
							);
						})}
					</div>
					<div className="secondSection">
						<FormComponent />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Services;
