export default function NormalHextechButton({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative group xs:w-[280px] md:w-[360px] h-[61px] overflow-hidden cursor-pointer">
			<video
				muted
				autoPlay
				loop
				src={"/normal-glow.mp4"}
				className={`transition-all duration-500 absolute
				opacity-[100] group-hover:opacity-[0]
				`}
			/>
			<video
				muted
				autoPlay
				loop
				src={"/intense-glow.mp4"}
				className={`transition-all duration-500 absolute 
				opacity-[0.15] group-hover:opacity-[100]
				`}
			/>
			<div
				className="
      absolute w-[100%] text-center font-bold
      font-beaufort text-h6 xs:scale-[1.1] sm:scale-[1.35] transition-all
      text-blue-1 xs:pt-[20px] sm:pt-[16px] group-hover:[text-shadow:_0_0_5px_#0AC8B9] uppercase"
			>
				<p>{children}</p>
			</div>
		</div>
	);
}
