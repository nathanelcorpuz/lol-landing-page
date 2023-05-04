import Image from "next/image";
import riot from "../../../public/riot.png";
import lol from "../../../public/lol-icon.png";
import userIcon from "../../../public/user.png";
import globe from "../../../public/globe.png";
import HeaderLink from "./HeaderLink";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

const nav1 = [
	{
		text: "Game",
		href: "#",
	},
	{
		text: "Champions",
		href: "#",
	},
	{
		text: "Universe",
		href: "#",
	},
	{
		text: "Esports",
		href: "#",
	},
];

const nav2 = [
	{
		text: "News",
		href: "#",
	},
	{
		text: "Events",
		href: "#",
	},
	{
		text: "Patch Notes",
		href: "#",
	},
	{
		text: "Support",
		href: "#",
	},
];

export default function Header() {
	return (
		<>
			<HeaderMobile />
			<header className="hidden xl:flex text-gold-1 items-center justify-between border-b-gold-6 border-b">
				<div className="[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(200,170,110,0.2)_100%)] cursor-pointer">
					<div className="flex items-center h-[80px] px-[30px] bg-grey-hextech-black hover:bg-transparent transition-all duration-300">
						<Image
							src={riot}
							width={100}
							height={60}
							alt="riot games logo"
							className=""
						/>
					</div>
				</div>
				<div className="flex items-center">
					<nav>
						<ul className="flex">
							{nav1.map((link) => (
								<HeaderLink key={link.text} href={link.href}>
									{link.text}
								</HeaderLink>
							))}
						</ul>
					</nav>
					<div className="[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(200,170,110,0.2)_100%)]">
						<Link
							href="#"
							className="h-[80px] px-[40px] flex items-center transition-all duration-300 bg-grey-hextech-black hover:bg-transparent"
						>
							<Image
								src={lol}
								alt="league of legends icon"
								width={50}
								height={30}
							/>
						</Link>
					</div>
					<nav>
						<ul className="flex">
							{nav2.map((link) => (
								<HeaderLink key={link.text} href={link.href}>
									{link.text}
								</HeaderLink>
							))}
						</ul>
					</nav>
				</div>
				<div className="flex">
					<div className="[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(200,170,110,0.2)_100%)] ">
						<Link
							href="#"
							className="h-[80px] px-[30px] bg-grey-hextech-black hover:bg-transparent flex items-center transition-all duration-300"
						>
							<Image src={userIcon} alt="user icon" width={25} height={25} />
						</Link>
					</div>
					<div className="[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(200,170,110,0.2)_100%)] ">
						<Link
							href="#"
							className="h-[80px] px-[30px] bg-grey-hextech-black hover:bg-transparent flex items-center transition-all duration-300"
						>
							<Image src={globe} alt="globe icon" width={25} height={25} />
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}
