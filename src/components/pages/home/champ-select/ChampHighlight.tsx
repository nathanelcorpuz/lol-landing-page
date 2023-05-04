import Image from "next/image";
import yasuo from "../../../../../public/fighters.png";
import Standard2 from "@/components/common/text/standard/Standard2";
import Heading5 from "@/components/common/text/heading/Heading5";

export default function ChampHighlight() {
	return (
		<div className="w-[50%] flex flex-col items-center justify-center text-center">
			<div className="w-[100%] h-[500px] relative">
				<Image
					src={yasuo}
					fill
					className="object-contain object-center"
					alt="sample"
				/>
			</div>
			<div>
				<Heading5>Yasuo</Heading5>
				<Standard2>The Unforgiven</Standard2>
			</div>
		</div>
	);
}
