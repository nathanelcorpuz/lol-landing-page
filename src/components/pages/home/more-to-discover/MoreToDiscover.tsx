import lulu from "../../../../../public/lulu.png";
import Heading1 from "@/components/common/text/heading/Heading1";
import MoreToDiscoverBackground from "./MoreToDiscoverBackground";
import Image from "next/image";
import Standard3 from "@/components/common/text/standard/Standard3";
import Standard2 from "@/components/common/text/standard/Standard2";
import Heading3 from "@/components/common/text/heading/Heading3";

export default function MoreToDiscover() {
	return (
		<section className="py-[250px]">
			<div className="relative">
				<MoreToDiscoverBackground />
				<div className="text-center absolute top-0 right-0 bottom-0 left-0 flex flex-col gap-[30px] xl:gap-[50px] items-center justify-center p-4">
					<div className="hidden xl:block">
						<Heading1>More to Discover</Heading1>
					</div>
					<div className="xl:hidden block">
						<Heading3>More to Discover</Heading3>
					</div>
					<div className="relative w-[fit-content] cursor-pointer hover:scale-[1.05] transition-all duration-300">
						<Image
							src={lulu}
							width={500}
							height={300}
							alt="lulu illustration"
						/>
					</div>
					<Standard2>THE LCK IS READY TO BREAK THE MSI DROUGHT</Standard2>
				</div>
			</div>
		</section>
	);
}
