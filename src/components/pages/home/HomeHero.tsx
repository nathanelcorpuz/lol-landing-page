import Image from "next/image";
import logo from "../../../../public/lol-logo.png";
import HextechButton from "@/components/common/button/HextechButton";

export default function HomeHero() {
	return (
		<section className="h-[700px] relative flex flex-col pt-[50px] items-center">
			<div className="z-10 xs:pt-0 sm:pt-[50px] md:pt-[120px] px-[30px]">
				<Image
					src={logo}
					alt="league of legends logo"
					width={800}
					height={300}
				/>
			</div>
			<div className="z-10 xs:scale-[0.7] sm:scale-[0.8] md:scale-[1]">
				<HextechButton />
			</div>
			<div
				className="absolute xs:top-0 xs:scale-[4] 
			sm:top-[150px] sm:scale-[2.5]
			md:top-[50px] md:scale-[1]
			xl:top-[0]"
			>
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
