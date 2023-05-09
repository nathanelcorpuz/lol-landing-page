import Heading5 from "@/components/common/text/heading/Heading5";
import GameModeVideo from "./GameModeVideo";
import GameModesButtons from "./GameModesButtons";
import { gameModes } from "./utils/gameModes";
import Standard1 from "@/components/common/text/standard/Standard1";
import NormalButton from "@/components/common/button/NormalButton";
import Heading3 from "@/components/common/text/heading/Heading3";

export default function GameModesMobile({
	activeGameMode,
	setActiveGameMode,
}: {
	activeGameMode: string;
	setActiveGameMode: (gameMode: string) => void;
}) {
	return (
		<div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col xl:hidden items-center justify-start p-4 gap-[40px]">
			<div
				className="
      xs:w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px]
      xs:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]
      relative"
			>
				<GameModeVideo activeGameMode={activeGameMode} />
			</div>
			<div className="flex gap-[50px] justify-center">
				<GameModesButtons
					activeGameMode={activeGameMode}
					setActiveGameMode={setActiveGameMode}
				/>
			</div>
			<div className="text-center flex flex-col items-center">
				{gameModes.map((gameMode) => {
					if (gameMode.h1 === activeGameMode) {
						return (
							<div
								key={gameMode.h1}
								className="z-20 flex flex-col gap-[30px] animate-fadeInFast"
							>
								<Heading5 className="text-gold-2">{gameMode.h5}</Heading5>
								<Heading3>{gameMode.h1}</Heading3>
								<div className="max-w-[550px] m-auto">
									<Standard1>{gameMode.description}</Standard1>
								</div>

								<div className="w-[fit-content] m-auto xl:m-0">
									<NormalButton />
								</div>
							</div>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
}
