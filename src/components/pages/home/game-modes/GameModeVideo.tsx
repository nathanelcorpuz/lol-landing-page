import Image from "next/image";
import frame from "../../../../../public/game-mode-frame.png";
import lines from "../../../../../public/game-mode-frame-lines.png";

export default function GameModeVideo({
	activeGameMode,
}: {
	activeGameMode: string;
}) {
	return (
		<div className="w-[40%] relative">
			<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center">
				<video
					src="/rift.mp4"
					autoPlay
					muted
					loop
					className={`transition-all duration-500 w-[100%] [clip-path:circle(40%)] ${
						activeGameMode === "Summoner's Rift" ? "opacity-[1]" : "opacity-[0]"
					}`}
				/>
			</div>
			<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center">
				<video
					src="/aram.mp4"
					autoPlay
					muted
					loop
					className={`transition-all duration-500 w-[100%] [clip-path:circle(40%)] ${
						activeGameMode === "ARAM" ? "opacity-[1]" : "opacity-[0]"
					}`}
				/>
			</div>
			<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center">
				<video
					src="/tft.mp4"
					autoPlay
					muted
					loop
					className={`transition-all duration-500 w-[100%] [clip-path:circle(40%)] ${
						activeGameMode === "Teamfight Tactics"
							? "opacity-[1]"
							: "opacity-[0]"
					}`}
				/>
			</div>
			<Image
				src={frame}
				fill
				className="object-contain object-center"
				alt="frame"
			/>
			<Image
				src={lines}
				fill
				className="object-contain object-center animate-rotation"
				alt="frame"
			/>
		</div>
	);
}
