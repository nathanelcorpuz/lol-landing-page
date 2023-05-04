import Image from "next/image";
import logo from "../../../../public/lol-logo.png";
import HextechButton from "@/components/common/button/HextechButton";

export default function HomeHero() {
	return (
		<section className="h-[700px] relative flex flex-col pt-[50px] items-center">
			<div className="z-10">
				<Image
					src={logo}
					alt="league of legends logo"
					width={800}
					height={300}
				/>
			</div>
			<div className="z-10">
				<HextechButton />
			</div>
			<div className="absolute top-[-100px]">
				<video
					src="/bg-ambience-3.mp4"
					className="w-screen opacity-[0.2]"
					autoPlay
					muted
					loop
				/>
			</div>
		</section>
	);
}
