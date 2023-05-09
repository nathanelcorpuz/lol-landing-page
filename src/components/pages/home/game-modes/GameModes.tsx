"use client";

import Heading1 from "@/components/common/text/heading/Heading1";
import rift from "../../../../../public/rift.jpeg";
import Image from "next/image";
import Heading5 from "@/components/common/text/heading/Heading5";
import Standard1 from "@/components/common/text/standard/Standard1";
import NormalButton from "@/components/common/button/NormalButton";
import GameModesButtons from "./GameModesButtons";
import GameModeVideo from "./GameModeVideo";
import { useState } from "react";

const gameModes = [
	{
		h5: "The Most Popular Game Mode",
		h1: "Summoner's Rift",
		description:
			"Clear your lane, dive into epic 5v5 team fights, and destroy the enemy nexus before they destroy yours.",
	},
	{
		h5: "All Random, All Mid",
		h1: "ARAM",
		description:
			"Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.",
	},
	{
		h5: "A Free-For-All War for Supremacy",
		h1: "Teamfight Tactics",
		description:
			"Assemble a squad of champions that battle on your behalf. Outlast all seven of your opponents and become the last person standing.",
	},
];

export default function GameModes() {
	const [activeGameMode, setActiveGameMode] = useState("Summoner's Rift");
	return (
		<section className="py-[250px]">
			<div className="relative">
				<div className="relative w-[100%] h-[100vh]">
					<Image
						src={rift}
						alt="bg"
						fill
						className="object-cover object-center opacity-[0.2]"
					/>
					<span
						className="absolute top-0 right-0 bottom-0 left-0 
          [background:linear-gradient(180deg,#010A13_0%,rgba(0,0,0,0)_50%),linear-gradient(180deg,rgba(0,0,0,0)_50%,#010A13_100%)]"
					/>
				</div>
				<div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center gap-[50px]">
					<div className="relative flex items-center h-[100%] w-[40%]">
						<GameModesButtons
							activeGameMode={activeGameMode}
							setActiveGameMode={setActiveGameMode}
						/>
						{gameModes.map((gameMode) => {
							if (gameMode.h1 === activeGameMode) {
								return (
									<div className="z-20 flex flex-col gap-[30px] animate-fadeInFast">
										<Heading5 className="text-gold-2">{gameMode.h5}</Heading5>
										<Heading1>{gameMode.h1}</Heading1>
										<Standard1>{gameMode.description}</Standard1>
										<div className="w-[fit-content]">
											<NormalButton />
										</div>
									</div>
								);
							}
							return null;
						})}
					</div>
					<GameModeVideo activeGameMode={activeGameMode} />
				</div>
			</div>
		</section>
	);
}
