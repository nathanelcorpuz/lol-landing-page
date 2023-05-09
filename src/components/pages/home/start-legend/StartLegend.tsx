import Heading1 from "@/components/common/text/heading/Heading1";
import Image from "next/image";
import StartLegendBackground from "./StartLegendBackground";
import Standard1 from "@/components/common/text/standard/Standard1";
import HextechButton from "@/components/common/button/HextechButton";
import NormalButton from "@/components/common/button/NormalButton";
import ButtonLink from "@/components/common/button/ButtonLink";
import Heading3 from "@/components/common/text/heading/Heading3";

export default function StartLegend() {
	return (
		<section className="py-[250px]">
			<div className="relative">
				<StartLegendBackground />
				<div className="p-4 text-center absolute top-[-150px] right-0 bottom-0 left-0 flex flex-col items-center justify-center gap-[30px]">
					<div className="hidden xl:block">
						<Heading1>Start your Legend</Heading1>
					</div>
					<div className="xl:hidden block">
						<Heading3>Start your Legend</Heading3>
					</div>
					<Standard1>
						New to League? Get a rundown on the basics for the most popular game
						mode.
					</Standard1>
					<HextechButton>Get Started</HextechButton>
					<div className="pt-[30px]">
						<ButtonLink>Play for Free</ButtonLink>
					</div>
				</div>
			</div>
		</section>
	);
}
