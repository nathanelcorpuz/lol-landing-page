"use client";

import Heading1 from "@/components/common/text/heading/Heading1";
import Heading5 from "@/components/common/text/heading/Heading5";
import Standard1 from "@/components/common/text/standard/Standard1";
import NormalButton from "@/components/common/button/NormalButton";
import GameModesButtons from "./GameModesButtons";
import GameModeVideo from "./GameModeVideo";
import { useState } from "react";
import GameModesBackground from "./GameModesBackground";
import GameModesMobile from "./GameModesMobile";
import { gameModes } from "./utils/gameModes";

export default function GameModes() {
	const [activeGameMode, setActiveGameMode] = useState("Summoner's Rift");
	return (
		<section className="py-[250px]">
			<div className="relative">
				<GameModesBackground />
				<GameModesMobile
					activeGameMode={activeGameMode}
					setActiveGameMode={setActiveGameMode}
				/>
				{/* game modes section for desktop */}
				<div className="absolute top-0 right-0 bottom-0 left-0 hidden xl:flex justify-center items-center gap-[60px]">
					<div className="relative flex items-center h-[100%] w-[35%] ms-auto">
						<div className="z-[1] absolute xl:top-[-580px] right-0 bottom-0 left-0 hidden xl:flex gap-[80px] items-center">
							<GameModesButtons
								activeGameMode={activeGameMode}
								setActiveGameMode={setActiveGameMode}
							/>
						</div>
						{gameModes.map((gameMode) => {
							if (gameMode.h1 === activeGameMode) {
								return (
									<div className="z-20 flex flex-col gap-[30px] animate-fadeInFast">
										<Heading5 className="text-gold-2">{gameMode.h5}</Heading5>
										<Heading1>{gameMode.h1}</Heading1>
										<Standard1>{gameMode.description}</Standard1>
										<div className="w-[fit-content] xl:m-0">
											<NormalButton />
										</div>
									</div>
								);
							}
							return null;
						})}
					</div>
					<div className="w-[35%] relative me-auto">
						<GameModeVideo activeGameMode={activeGameMode} />
					</div>
				</div>
			</div>
		</section>
	);
}
