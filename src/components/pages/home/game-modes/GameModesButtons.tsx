import Image from "next/image";
import riftIcon from "../../../../../public/summoners-rift-icon.png";
import aramIcon from "../../../../../public/aram-icon.png";
import tftIcon from "../../../../../public/tft-icon.png";

export default function GameModesButtons({
	activeGameMode,
	setActiveGameMode,
}: {
	activeGameMode: string;
	setActiveGameMode: (gameMode: string) => void;
}) {
	return (
		<div
			className="
            z-[1] absolute top-[-580px]
            right-0 bottom-0 left-0 flex
            gap-[80px] items-center"
		>
			<button
				className={`transition-all duration-500 hover:[background:radial-gradient(50%_50%_at_50%_50%,_#785A28_0%,rgba(1,10,19,0)_100%)] ${
					activeGameMode === "Summoner's Rift" ? "opacity-[1]" : "opacity-[0.2]"
				}`}
				onClick={() => setActiveGameMode("Summoner's Rift")}
			>
				<Image src={riftIcon} width={100} height={100} alt="icon" />
			</button>
			<button
				className={`transition-all duration-500 hover:[background:radial-gradient(50%_50%_at_50%_50%,_#785A28_0%,rgba(1,10,19,0)_100%)] ${
					activeGameMode === "ARAM" ? "opacity-[1]" : "opacity-[0.2]"
				}`}
				onClick={() => setActiveGameMode("ARAM")}
			>
				<Image src={aramIcon} width={100} height={100} alt="icon" />
			</button>
			<button
				className={`transition-all duration-500 hover:[background:radial-gradient(50%_50%_at_50%_50%,_#785A28_0%,rgba(1,10,19,0)_100%)] ${
					activeGameMode === "Teamfight Tactics"
						? "opacity-[1]"
						: "opacity-[0.2]"
				}`}
				onClick={() => setActiveGameMode("Teamfight Tactics")}
			>
				<Image src={tftIcon} width={100} height={100} alt="icon" />
			</button>
		</div>
	);
}
