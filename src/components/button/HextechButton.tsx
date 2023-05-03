"use client";

import { useState } from "react";

export default function HextechButton() {
	const [hovered, setHovered] = useState(false);
	return (
		<div
			// hextechShape comes from globals.css
			className="hextechShape relative w-[200px]"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="absolute top-[13px] right-0 bottom-0 left-[46px] z-10 cursor-pointer">
				<p
					className={`font-beaufort text-h6 transition-all font-bold ${
						hovered ? "text-blue-2" : "text-gold-1"
					} `}
				>
					PLAY FOR FREE
				</p>
			</div>
			<video
				muted
				autoPlay
				loop
				src={"/normal-glow.mp4"}
				className={`rotate-[-15deg] scale-[2.5] cursor-pointer transition-all duration-500 absolute ${
					hovered ? "opacity-50" : "opacity-100"
				}`}
			/>
			<video
				muted
				autoPlay
				loop
				src={"/intense-glow.mp4"}
				className={`rotate-[-15deg] scale-[2.5] cursor-pointer transition-all duration-500 absolute ${
					hovered ? "opacity-100" : "opacity-50"
				}`}
			/>
		</div>
	);
}
