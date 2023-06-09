/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "150px",
			sm: "430px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			keyframes: {
				slideIn: {
					"0%": { left: "100%" },
					"100%": { left: "0" },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"50%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeInFast: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				rotation: {
					"0%": { transform: "rotate(0)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				slideIn: "slideIn 0.8s ease-in-out forwards",
				fadeIn: "fadeIn 1.6s ease-in-out forwards",
				fadeInFast: "fadeInFast 0.5s ease-in-out forwards",
				rotation: "rotation 120s infinite",
			},
			fontSize: {
				h1: "70px",
				h2: "50px",
				h3: "30px",
				h4: "24px",
				h5: "19px",
				h6: "15px",
				sMedium: "19px",
				sBold: "15px",
				sLarge: "76px",
				sStat: "19px",
			},
			colors: {
				blue: {
					1: "#CDFAFA",
					2: "#0AC8B9",
					3: "#0397AB",
					4: "#005A82",
					5: "#0A323C",
					6: "#091428",
					7: "#0A1428",
				},
				gold: {
					1: "#F0E6D2",
					2: "#C8AA6E",
					3: "#C8AA6E",
					4: "#C89B3C",
					5: "#785A28",
					6: "#463714",
					7: "#32281E",
				},
				grey: {
					1: "#A09B8C",
					1.5: "#5B5A56",
					2: "#3C3C41",
					3: "#1E2328",
					cool: "#1E282D",
					"hextech-black": "#010A13",
				},
			},
			fontFamily: {
				beaufort: ["var(--font-beaufortForLOL)"],
				spiegel: ["var(--font-roboto-mono)"],
			},
		},
	},
	plugins: [],
};
