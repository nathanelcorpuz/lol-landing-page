import Image from "next/image";
import rift from "../../../../../public/rift.jpeg";
import aram from "../../../../../public/aram.jpg";
import tft from "../../../../../public/tft.jpg";

export default function GameModesBackground({
	activeGameMode,
}: {
	activeGameMode: string;
}) {
	return (
		<div className="relative w-[100%] h-[100vh]">
			{activeGameMode === "Summoner's Rift" ? (
				<Image
					src={rift}
					alt="bg"
					fill
					className="object-cover object-center opacity-[0.2]"
				/>
			) : activeGameMode === "ARAM" ? (
				<Image
					src={aram}
					alt="bg"
					fill
					className="object-cover object-center opacity-[0.2]"
				/>
			) : (
				<Image
					src={tft}
					alt="bg"
					fill
					className="object-cover object-center opacity-[0.2]"
				/>
			)}
			<span
				className="absolute top-0 right-0 bottom-0 left-0 
          [background:linear-gradient(180deg,#010A13_0%,rgba(0,0,0,0)_50%),linear-gradient(180deg,rgba(0,0,0,0)_50%,#010A13_100%)]"
			/>
		</div>
	);
}
