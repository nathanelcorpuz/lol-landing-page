import Header from "@/components/common/header/Header";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/common/footer/Footer";

const beaufortForLOL = localFont({
	src: [
		{
			path: "../../public/fonts/BeaufortforLOL-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-LightItalic.ttf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-Italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-MediumItalic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-BoldItalic.ttf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-Heavy.ttf",
			weight: "900",
			style: "normal",
		},
		{
			path: "../../public/fonts/BeaufortforLOL-HeavyItalic.ttf",
			weight: "900",
			style: "italic",
		},
	],
	variable: "--font-beaufortForLOL",
	display: "swap",
});

const spiegel = localFont({
	src: [
		{
			path: "../../public/fonts/Spiegel_TT_Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Spiegel_TT_Regular_Italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/Spiegel_TT_SemiBold.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Spiegel_TT_SemiBold_Italic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/fonts/Spiegel_TT_Bold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Spiegel_TT_Bold_Italic.ttf",
			weight: "600",
			style: "italic",
		},
	],
	variable: "--font-spiegel",
	display: "swap",
});

export const metadata = {
	title: "League of Legends Landing Page by Nathan Corpuz",
	description:
		"A recreation of League of Legends' landing page by Nathan Corpuz",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="bg-grey-hextech-black">
			<body className={`${beaufortForLOL.variable} ${spiegel.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
