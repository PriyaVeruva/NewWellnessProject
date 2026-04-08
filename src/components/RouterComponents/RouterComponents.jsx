import { Routes, Route } from "react-router-dom";
import Services from "../../pages/Services/Services";
import AboutUs from "../../pages/AboutUs/AboutUs";
import BodyCompositionAnalysis from "../../pages/WeightManagement/BodyCompositionAnalysis/BodyCompositionAnalysis";
import SpotReduction from "../../pages/WeightManagement/SpotReduction/SpotReduction";
import WeightLoss from "../../pages/WeightManagement/WeightLoss/WeightLoss";
import InchLoss from "../../pages/WeightManagement/InchLoss/InchLoss";
import AromaVedaTherapy from "../../pages/WeightManagement/AromaVedaTherapy/AromaVedaTherapy";
import SkinWhiteningTreatment from "../../pages/Skin/SkinWhiteningTreatment/SkinWhiteningTreatment";
import SkinRadiantTreatment from "../../pages/Skin/SkinRadiantTreatment/SkinRadiantTreatment";
import Wrinkle from "../../pages/Skin/Wrinkle/Wrinkle";
import PigmentationCare from "../../pages/Skin/PigmentationCare/PigmentationCare";
import MelasmaTreatment from "../../pages/Skin/MelasmaTreatment/MelasmaTreatment";
import ChemicalPeel from "../../pages/Skin/ChemicalPeel/ChemicalPeel";
import UnderEyeDarkCircle from "../../pages/Skin/UnderEyeDarkCircle/UnderEyeDarkCircle";
import BestMoleAndWartRemovalClinic from "../../pages/Skin/BestMoleAndWartRemovalClinic/BestMoleAndWartRemovalClinic";
import Cryolipolysis from "../../pages/Slimming/Cryolipolysis/Cryolipolysis";
import RFTherapy from "../../pages/Slimming/RFTherapy/RFTherapy";
import UltrasonicCavitation from "../../pages/Slimming/UltrasonicCavitation/UltrasonicCavitation";
import FigureCorrection from "../../pages/Slimming/FigureCorrection/FigureCorrection";
import BodyTherapies from "../../pages/Slimming/BodyTherapies/BodyTherapies";
import Sculpture from "../../pages/Slimming/Sculpture/Sculpture";
import BodyToning from "../../pages/Slimming/BodyToning/BodyToning";
import AloeWrapTreatment from "../../pages/Slimming/AloeWrapTreatment/AloeWrapTreatment";
import NonSurgicalLiposuction from "../../pages/Slimming/NonSurgicalLiposuction/NonSurgicalLiposuction";
import LipoLaserProgram from "../../pages/Slimming/LipoLaserProgram/LipoLaserProgram";
import BreastReduction from "../../pages/Slimming/BreastReduction/BreastReduction";
import BreastFirming from "../../pages/Slimming/BreastFirming/BreastFirming";
import BodySculpting from "../../pages/Slimming/BodySculpting/BodySculpting";
import MesolipoysisProgram from "../../pages/Slimming/MesolipolysisProgram/MesolipoysisProgram";
import BodyDetoificationTreatment from "../../pages/Slimming/BodyDetoificationTreatment/BodyDetoificationTreatment";
import BodyFirming from "../../pages/Slimming/BodyFirming/BodyFirming";
import HairTransplant from "../../pages/Hair/HairTransplant/HairTransplant";
import AntiDandruff from "../../pages/Hair/AntiDandruffTreatment1/AntiDandruff";
import PRPHairLoss from "../../pages/Hair/PRPHairLossTreatment/PRPHairLoss";
import QR678 from "../../pages/Hair/QR678/QR678";
import Silorgisis from "../../pages/Hair/Silorgisis/Silorgisis";
import HairFall from "../../pages/Hair/HairFallTreatment/HairFall";
import GFC from "../../pages/Hair/GFC/GFC";
import Home from "../../pages/Home/Home";

const RouterComponents = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/services" element={<Services />} />
			<Route path="/about" element={<AboutUs />} />
			{/*WeightManagement Routes */}

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
			<Route
				path="/skin/whitening"
				element={<SkinWhiteningTreatment />}
			/>
			<Route path="/skin/radiant" element={<SkinRadiantTreatment />} />
			<Route path="/skin/wrinkle" element={<Wrinkle />} />
			<Route
				path="/skin/pigmentation"
				element={<PigmentationCare />}
			/>
			<Route path="/skin/melasma" element={<MelasmaTreatment />} />
			<Route path="/skin/chemical-peel" element={<ChemicalPeel />} />
			<Route path="/skin/under-eye" element={<UnderEyeDarkCircle />} />
			<Route
				path="/skin/mole-wart"
				element={<BestMoleAndWartRemovalClinic />}
			/>
			{/*Slimmin Routes */}
			<Route
				path="/slimming/cryolipolysis"
				element={<Cryolipolysis />}
			/>
			<Route path="/slimming/rf-therapy" element={<RFTherapy />} />
			<Route
				path="/slimming/ultrasonic-cavitation"
				element={<UltrasonicCavitation />}
			/>
			<Route
				path="/slimming/figure-correction"
				element={<FigureCorrection />}
			/>
			<Route path="/slimming/body-firming" element={<BodyFirming />} />
			<Route
				path="/slimming/body-therapies"
				element={<BodyTherapies />}
			/>
			<Route path="/slimming/sculpture" element={<Sculpture />} />
			<Route path="/slimming/body-toning" element={<BodyToning />} />
			<Route
				path="/slimming/aloe-wrap-treatment"
				element={<AloeWrapTreatment />}
			/>
			<Route
				path="/slimming/body-detox"
				element={<BodyDetoificationTreatment />}
			/>
			<Route
				path="/slimming/non-surgical-liposuction"
				element={<NonSurgicalLiposuction />}
			/>
			<Route
				path="/slimming/lipo-laser"
				element={<LipoLaserProgram />}
			/>
			<Route
				path="/slimming/mesolipolysis"
				element={<MesolipoysisProgram />}
			/>
			<Route
				path="/slimming/body-sculpting"
				element={<BodySculpting />}
			/>
			<Route
				path="/slimming/breast-reduction"
				element={<BreastReduction />}
			/>
			<Route
				path="/slimming/breast-firming"
				element={<BreastFirming />}
			/>
			<Route path="/hair/transplant" element={<HairTransplant />} />
			<Route path="/hair/antidandruff" element={<AntiDandruff />} />
			<Route path="hair/prp" element={<PRPHairLoss />} />
			<Route path="/hair/hairfall" element={<HairFall />} />
			<Route path="/hair/gfc" element={<GFC />} />
			<Route path="/hair/qr678" element={<QR678 />} />
			<Route path="/hair/silorgisis" element={<Silorgisis />} />
			{/* <Route path="/contact" element={<LaserTreatment />} /> */}
		</Routes>
	);
};

export default RouterComponents;
