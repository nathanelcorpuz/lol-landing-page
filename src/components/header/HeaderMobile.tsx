"use client";

import Image from "next/image";
import riot from "../../../public/riot.png";
import lol from "../../../public/lol-icon.png";
import Link from "next/link";
import { useState } from "react";
import Heading6 from "../text/heading/Heading6";
import HeaderMobileModalMenu from "./HeaderMobileModalMenu";

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

export default function HeaderMobile() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<header className="xl:hidden flex text-gold-1 items-center justify-between border-b-gold-6 border-b">
				<div className="w-[150px] p-[20px]">
					<Image
						src={riot}
						width={70}
						height={40}
						alt="riot games logo"
						className=""
					/>
				</div>
				<Link href="#" className="w-[150px] h-[80px] px-[40px] flex items-center justify-center">
					<Image
						src={lol}
						alt="league of legends icon"
						width={40}
						height={40}
					/>
				</Link>
				<div className="w-[150px] flex justify-end">
					<button
						className="relative h-[80px] px-[20px] mt-[-10px]"
						onClick={() => setIsModalOpen((prev) => !prev)}
					>
						<Heading6>Menu</Heading6>
						<span
							className="
          transition-all duration-300 block absolute
          top-[72%] right-[21px] bottom-[25%] left-[40%]
          bg-gold-1"
						/>
					</button>
				</div>
			</header>
			{/* modal */}
			{isModalOpen && (
				<div
					className="
        fixed top-0 right-0 bottom-0 bg-grey-hextech-black
        animate-slideIn border-l border-l-gold-6"
				>
					<div className="animate-fadeIn">
						<HeaderMobileModalMenu setIsModalOpen={setIsModalOpen} />
						<div className="pt-[20px]">
							<nav>
								<ul className="flex flex-col items-center">
									{[...nav1, ...nav2].map((link) => (
										<li key={link.text}>
											<Link
												href={link.href}
												className="px-[30px] py-[20px] block"
											>
												<Heading6>{link.text}</Heading6>
											</Link>
										</li>
									))}
								</ul>
							</nav>
							<nav></nav>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
