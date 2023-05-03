export default function NormalButton() {
	return (
		<div
			className="group scale-[1.35] p-[1px] bg-black cursor-pointer transition-all duration-300
			hover:[filter:_drop-shadow(0_0_5px_rgba(200,170,110,0.5))]
			"
		>
			<div className="p-[4px] bg-gold-2">
				<button className="transition-all duration-300 bg-grey-3 border-black border-[1px] py-[7px] px-[20px] flex items-center justify-center group-hover:[box-shadow:_0_0_15px_0_#C8AA6E40_inset]">
					<p
						className="text-h6 font-beaufort text-gold-2 font-bold leading-[19px] tracking-[1.1px] 
					group-hover:[text-shadow:_0_0_2px_#C89B3C] transition-all duration-300"
					>
						PLAY NOW
					</p>
				</button>
			</div>
		</div>
	);
}
