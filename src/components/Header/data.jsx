export const headerMenu = [
	{ label: "Home", link: "/" },
	{ label: "About Us", link: "/about" },
	{ label: "Services", link: "/services" },

	{
		label: "Weight Management",
		link: "/therapies",
		dropdown: [
			{ label: "Spot Reduction", link: "/weight/spot-reduction" },
			{
				label: "Body Composition Analysis",
				link: "/weight/body-composition",
			},
			{ label: "Aroma Veda Therapy", link: "/weight/aroma-veda" },
			{ label: "Weight Loss", link: "/weight/weight-loss" },
			{ label: "Inch Loss", link: "/weight/inch-loss" },
		],
	},

	{
		label: "Slimming",
		link: "/programs",
		dropdown: [
			{ label: "Cryolipolysis", link: "/slimming/cryolipolysis" },
			{ label: "RF Therapy", link: "/slimming/rf-therapy" },
			{
				label: "Ultrasonic Caviation",
				link: "/slimming/ultrasonic-caviation",
			},
			{
				label: "Figure Correction",
				link: "/slimming/figure-correction",
			},
			{ label: "Body Firming", link: "/slimming/body-firming" },
			{ label: "Body Therapies", link: "/slimming/body-therapies" },
			{ label: "Sculpture", link: "/slimming/sculpture" },
			{ label: "Body Toning", link: "/slimming/body-toning" },
			{ label: "Aloe Wrap Treatment", link: "/slimming/aloe-wrap" },
			{
				label: "Body Detoxification Treatment",
				link: "/slimming/body-detox",
			},
			{
				label: "Non Surgical Liposuction",
				link: "/slimming/non-surgical-liposuction",
			},
			{ label: "Lipo Laser Program", link: "/slimming/lipo-laser" },
			{
				label: "Mesolipolysis Program",
				link: "/slimming/mesolipolysis",
			},
			{ label: "Body Sculpting", link: "/slimming/body-sculpting" },
			{
				label: "Breast Reduction",
				link: "/slimming/breast-reduction",
			},
			{ label: "Breast Firming", link: "/slimming/breast-firming" },
		],
	},

	{
		label: "Hair",
		link: "/hair",
		dropdown: [
			{ label: "Hair Transplant", link: "/hair/transplant" },
			{ label: "AntiDandruff Treatment1", link: "/hair/antidandruff" },
			{ label: "PRP HairLoss Treatment", link: "/hair/prp" },
			{ label: "HairFall Treatment", link: "/hair/hairfall" },
			{ label: "GFC", link: "/hair/gfc" },
			{ label: "QR678", link: "/hair/qr678" },
			{ label: "Silorgisis", link: "/hair/silorgisis" },
		],
	},

	{
		label: "Skin",
		link: "/skin",
		dropdown: [
			{ label: "Skin Whitening Treatment", link: "/skin/whitening" },
			{ label: "Skin Radiant Treatment", link: "/skin/radiant" },
			{ label: "Wrinkle", link: "/skin/wrinkle" },
			{ label: "Pigmentation Care", link: "/skin/pigmentation" },
			{ label: "Melasma Treatment", link: "/skin/melasma" },
			{ label: "Chemical Peel", link: "/skin/chemical-peel" },
			{ label: "Under Eye Dark Circle", link: "/skin/under-eye" },
			{
				label: "Best Mole & Wart Removal Clinic",
				link: "/skin/mole-wart",
			},
		],
	},

	{ label: "Laser", link: "/contact" },
	{ label: "Make Appointment", link: "/book", highlight: true },
];
