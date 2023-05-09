import NormalButton from "@/components/common/button/NormalButton";
import Heading1 from "@/components/common/text/heading/Heading1";
import Heading3 from "@/components/common/text/heading/Heading3";
import Standard1 from "@/components/common/text/standard/Standard1";

export default function SlayWithStyle() {
	return (
		<section className="relative">
			<div className="absolute top-0 right-0 bottom-0 left-0 z-20 flex items-center">
				<div className="flex flex-col gap-[20px] m-auto lg:m-0 lg:flex text-center lg:text-start items-center lg:items-start lg:ps-[3%] xl:ps-[10%] p-4">
					<div className="hidden lg:block w-[fit-content]">
						<Heading1>Slay with Style</Heading1>
					</div>
					<div className="block lg:hidden w-[fit-content]">
						<Heading3>Slay with Style</Heading3>
					</div>
					<Standard1>
						Make it personal by changing up the look of your favorite champions
						with skins.
					</Standard1>
					<div className="w-[fit-content]">
						<NormalButton>Play now</NormalButton>
					</div>
				</div>
			</div>
			<video
				src="/slay-with-style.mp4"
				className="w-screen object-cover [object-position:70%_0] h-[100vh]"
				autoPlay
				muted
				loop
			/>
			<span
				className="absolute top-0 right-0 bottom-0 left-0 
          [background:linear-gradient(180deg,#010A13_0%,rgba(0,0,0,0)_50%),linear-gradient(180deg,rgba(0,0,0,0)_50%,#010A13_100%)]"
			/>
		</section>
	);
}
