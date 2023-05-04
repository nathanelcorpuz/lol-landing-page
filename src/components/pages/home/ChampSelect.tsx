import Heading1 from "@/components/common/text/heading/Heading1";
import champs from "../../../../public/champs.webp";
import Image from "next/image";
import Standard1 from "@/components/common/text/standard/Standard1";
import NormalHextechButton from "@/components/common/button/NormalHextechButton";
import ButtonLink from "@/components/common/button/ButtonLink";

export default function ChampSelect() {
	return (
		<section className="relative">
			<div className="relative w-screen h-[800px]">
				<Image
					src={champs}
					fill
					className="object-cover object-center "
					alt="5 league of legends champions"
				/>
			</div>
			<div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center gap-[30px] z-20">
				<Heading1>Choose your Champion</Heading1>
				<Standard1>
					Whether you like to dive straight into the fray, support your
					teammates, or something in between, there's a spot for you in the
					rift.
				</Standard1>
				<div className="flex flex-col gap-[20px] items-center">
					<NormalHextechButton text="Discover more Champions" />
					<ButtonLink>Play Now</ButtonLink>
				</div>
			</div>
			<span className="block absolute top-0 w-screen h-[800px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,#010A13_100%),linear-gradient(180deg,#010A13_0%,rgba(0,0,0,0)_100%)] z-10" />
		</section>
	);
}
