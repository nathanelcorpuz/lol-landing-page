import Heading1 from "@/components/common/text/heading/Heading1";
import rift from "../../../../../public/rift.jpeg";
import riftIcon from "../../../../../public/summoners-rift-icon.png";
import aramIcon from "../../../../../public/aram-icon.png";
import tftIcon from "../../../../../public/tft-icon.png";
import frame from "../../../../../public/game-mode-frame.png";
import lines from "../../../../../public/game-mode-frame-lines.png";
import Image from "next/image";
import Heading5 from "@/components/common/text/heading/Heading5";
import Standard1 from "@/components/common/text/standard/Standard1";
import NormalButton from "@/components/common/button/NormalButton";

export default function GameModes() {
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
						<div
							className="
            z-[1] absolute top-[-580px]
            right-0 bottom-0 left-0 flex
            gap-[80px] items-center"
						>
							<div className="group">
								<button className="opacity-[1] hover:[background:radial-gradient(50%_50%_at_50%_50%,_#785A28_0%,rgba(1,10,19,0)_100%)]">
									<Image src={riftIcon} width={100} height={100} alt="icon" />
								</button>
							</div>
							<button className="opacity-[0.2] hover:[background:radial-gradient(50%_50%_at_50%_50%,_#785A28_0%,rgba(1,10,19,0)_100%)]">
								<Image src={aramIcon} width={100} height={100} alt="icon" />
							</button>
							<button className="opacity-[0.2] hover:[background:radial-gradient(50%_50%_at_50%_50%,_#785A28_0%,rgba(1,10,19,0)_100%)]">
								<Image src={tftIcon} width={100} height={100} alt="icon" />
							</button>
						</div>
						<div className="z-20 flex flex-col gap-[30px]">
							<Heading5>The most popular game mode</Heading5>
							<Heading1>Summoner's Rift</Heading1>
							<Standard1>
								Clear your lane, dive into epic 5v5 team fights, and destroy the
								enemy nexus before they destroy yours.
							</Standard1>
							<div className="w-[fit-content]">
								<NormalButton />
							</div>
						</div>
					</div>
					<div className="w-[40%] relative">
						{/* video preview */}
						<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center">
							<video
								src="/rift.mp4"
								autoPlay
								muted
								loop
								className="w-[100%] [clip-path:circle(40%)]"
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
				</div>
			</div>
		</section>
	);
}
