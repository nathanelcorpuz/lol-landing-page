import NormalButton from "@/components/common/button/NormalButton";

export default function EndCTA() {
	return (
		<section>
			<div className="relative">
				<div className="relative w-[100%]">
					<video
						src="/end-cta.mp4"
						className="w-screen object-cover object-center h-[100vh]"
						autoPlay
						muted
						loop
					/>
					<span
						className="absolute top-0 right-0 bottom-0 left-0 
          [background:linear-gradient(180deg,#010A13_0%,rgba(0,0,0,0)_50%),linear-gradient(180deg,rgba(0,0,0,0)_50%,#010A13_100%)]"
					/>
				</div>
				<div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
					<NormalButton>Play for free</NormalButton>
				</div>
			</div>
		</section>
	);
}
