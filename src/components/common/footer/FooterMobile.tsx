import twitter from "../../../../public/twitter.png";
import facebook from "../../../../public/facebook.png";
import instagram from "../../../../public/instagram.png";
import youtube from "../../../../public/youtube.png";
import Link from "next/link";
import Standard4 from "../text/standard/Standard4";
import riot from "../../../../public/riot.png";
import Image from "next/image";
import Standard1 from "../text/standard/Standard1";
import Standard2 from "../text/standard/Standard2";
import { nav1, nav2, nav3 } from "./utils/nav";
import Credits from "./Credits";

export default function FooterMobile() {
	return (
		<footer className="xl:hidden border-t border-t-gold-6 list-none flex flex-col items-center gap-[50px] px-[10px] py-[70px]">
			<section className="flex flex-col items-center gap-[25px]">
				<nav>
					<ul className="flex items-center flex-wrap justify-center">
						{nav1.map((nav) => (
							<li key={nav.label}>
								<Link
									href="#"
									className="text-gold-2 uppercase p-[10px] sm:px-[25px] sm:py-[15px] block transition-all duration-300 hover:bg-gold-3 hover:text-grey-hextech-black"
								>
									<Standard4>{nav.label}</Standard4>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="cursor-pointer p-[15px] hover:scale-[1.05] transition-all duration-300">
					<Image src={riot} alt="riot games logo" width={150} height={200} />
				</div>
				<nav>
					<ul className="flex items-center flex-wrap justify-center">
						{nav2.map((nav) => (
							<li key={nav.label}>
								<Link
									href="#"
									className="text-gold-2 uppercase p-[10px] sm:px-[25px] sm:py-[15px] block transition-all duration-300 hover:bg-gold-3 hover:text-grey-hextech-black"
								>
									<Standard4>{nav.label}</Standard4>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</section>
			<section className="max-w-[700px] text-center">
				<Standard1>
					™ & © 2023 Riot Games, Inc. League of Legends and all related logos,
					characters, names, and distinctive likenesses thereof are exclusive
					property of Riot Games, Inc. All Rights Reserved.
				</Standard1>
			</section>
			<section className="flex justify-center flex-wrap">
				<div className="cursor-pointer p-[15px] hover:scale-[1.05] transition-all duration-300">
					<Image src={twitter} alt="twitter logo" width={40} height={40} />
				</div>
				<div className="cursor-pointer p-[15px] hover:scale-[1.05] transition-all duration-300">
					<Image src={facebook} alt="facebook logo" width={40} height={40} />
				</div>
				<div className="cursor-pointer p-[15px] hover:scale-[1.05] transition-all duration-300">
					<Image src={instagram} alt="instagram logo" width={40} height={40} />
				</div>
				<div className="cursor-pointer p-[15px] hover:scale-[1.05] transition-all duration-300">
					<Image src={youtube} alt="youtube logo" width={40} height={40} />
				</div>
			</section>
			<section>
				<nav>
					<ul className="flex items-center flex-wrap justify-center gap-[30px]">
						{nav3.map((nav) => (
							<li key={nav.label}>
								<Link
									href="#"
									className="text-gold-5 uppercase px-[15px] py-[7px] block transition-all duration-300 hover:bg-gold-3 hover:text-grey-hextech-black"
								>
									<Standard2>{nav.label}</Standard2>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</section>
			<Credits />
		</footer>
	);
}
