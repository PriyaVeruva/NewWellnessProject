import { Routes, Route } from "react-router-dom";
import Services from "../../pages/Services/Services";
import AboutUs from "../../pages/AboutUs/AboutUs";
import BodyCompositionAnalysis from "../../pages/WeightManagement/BodyCompositionAnalysis/BodyCompositionAnalysis";
import SpotReduction from "../../pages/WeightManagement/SpotReduction/SpotReduction";
import WeightLoss from "../../pages/WeightManagement/WeightLoss/WeightLoss";
import InchLoss from "../../pages/WeightManagement/InchLoss/InchLoss";
import AromaVedaTherapy from "../../pages/WeightManagement/AromaVedaTherapy/AromaVedaTherapy";
const RouterComponents = () => {
	//add all routes here
	return (
		<Routes>
			<Route path="/services" element={<Services />} />
			<Route path="/about" element={<AboutUs />} />
			<Route
				path="/weight/spot-reduction"
				element={<SpotReduction />}
			/>
			<Route
				path="/weight/body-composition"
				element={<BodyCompositionAnalysis />}
			/>

			<Route
				path="/weight/aroma-veda"
				element={<AromaVedaTherapy />}
			/>
			<Route path="/weight/weight-loss" element={<WeightLoss />} />
			<Route path="/weight/inch-loss" element={<InchLoss />} />
		</Routes>
	);
};

export default RouterComponents;
