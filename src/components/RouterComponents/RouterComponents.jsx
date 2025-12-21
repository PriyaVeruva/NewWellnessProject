import { Routes, Route } from "react-router-dom";
import Services from "../../pages/Services/Services";
const RouterComponents = () => {
	//add all routes here
	return (
		<Routes>
			<Route path="/services" element={<Services />} />
		</Routes>
	);
};

export default RouterComponents;
