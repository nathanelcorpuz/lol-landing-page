"use client";

import { useState } from "react";
import ChampHighlight from "./ChampHighlight";
import RoleButtons from "./RoleButtons";
import VideoHighlight from "./VideoHighlight";
import { roles } from "./utils/roles";

export default function ChampSelectInteractive() {
	const [activeRole, setActiveRole] = useState("Assassins");

	return (
		<div className="z-20 pb-[50px] relative">
			<RoleButtons
				roles={roles}
				activeRole={activeRole}
				setActiveRole={setActiveRole}
			/>
			<div className="absolute top-[300px] xl:top-[10%] z-[-10]">
				<video
					src="/bg-ambience-2.mp4"
					className="w-screen opacity-[0.2]"
					autoPlay
					muted
					loop
				/>
			</div>
			<div className=" max-w-[1300px] m-auto flex flex-col lg:flex-row items-stretch relative gap-[50px] lg:gap-[0] p-4">
				<VideoHighlight activeRole={activeRole} roles={roles} />
				<ChampHighlight activeRole={activeRole} roles={roles} />
			</div>
		</div>
	);
}
