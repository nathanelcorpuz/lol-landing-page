import HextechButtonLeftShape from "./HextechButtonLeftShape";
import HextechButtonRightShape from "./HextechButtonRightShape";

export default function HextechButton() {
	return (
		<div className="flex gap-[10px]">
			<div className="mt-[-3px]">
				<HextechButtonLeftShape />
			</div>
			<div
				// hextechShape comes from globals.css
				className="hextechShape relative w-[200px] scale-[1.35] group"
			>
				<div className="absolute w-[100%] text-center pt-[16px] z-10 cursor-pointer">
					<p
						className={`text-blue-1 leading-[19px] tracking-[1.1px] font-beaufort 
					text-h6 transition-all font-bold group-hover:[text-shadow:_0_0_2px_#0AC8B9]
					`}
					>
						PLAY FOR FREE
					</p>
				</div>
				<video
					muted
					autoPlay
					loop
					src={"/normal-glow.mp4"}
					className={`rotate-[-15deg] scale-[2.5] cursor-pointer transition-all duration-500 absolute
				opacity-[100] group-hover:opacity-[0]
				`}
				/>
				<video
					muted
					autoPlay
					loop
					src={"/intense-glow.mp4"}
					className={`rotate-[-15deg] scale-[2.5] cursor-pointer transition-all duration-500 absolute 
				opacity-[0.15] group-hover:opacity-[100]
				`}
				/>
			</div>
			<div className="mt-[-3px]">
				<HextechButtonRightShape />
			</div>
		</div>
	);
}
