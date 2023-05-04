import NormalButton from "@/components/common/button/NormalButton";
import Standard1 from "@/components/common/text/standard/Standard1";
import frame from "../../../../../public/vid-frame.png";
import Image from "next/image";

export default function VideoHighlight() {
	return (
		<div className="flex flex-col gap-[55px] w-[50%] items-center justify-center text-center">
			<div className="relative w-[fit-content] scale-[1]">
				<Image src={frame} width={400} height={200} alt="video frame" />
				<div className="flex absolute top-[5px] right-0 left-0 items-center justify-center">
					<video
						autoPlay
						muted
						loop
						src="/assassin-role.webm"
						className="w-[390px]"
					/>
				</div>
			</div>
			<div className="w-[550px]">
				<Standard1>
					Excel in close-range combat and initiate team fights. With high damage
					output and durability, you are a key player to secure objectives and
					take down enemy champions.
				</Standard1>
			</div>
			<div className="w-[fit-content]">
				<NormalButton />
			</div>
		</div>
	);
}
