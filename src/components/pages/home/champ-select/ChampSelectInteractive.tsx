import { useState } from "react";
import ChampHighlight from "./ChampHighlight";
import RoleButtons from "./RoleButtons";
import VideoHighlight from "./VideoHighlight";
import { roles } from "./utils/roles";

export default function ChampSelectInteractive() {
	const [activeRole, setActiveRole] = useState("");
	return (
		<div className="z-20 pb-[50px]">
			<RoleButtons
				roles={roles}
				activeRole={activeRole}
				setActiveRole={setActiveRole}
			/>
			<div className=" max-w-[1600px] m-auto flex items-center justify-center">
				<VideoHighlight />
				<ChampHighlight />
			</div>
		</div>
	);
}
