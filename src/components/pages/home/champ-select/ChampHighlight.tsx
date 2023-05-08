import Image from "next/image";
import fighters from "../../../../../public/fighters.png";
import assassins from "../../../../../public/assassins.png";
import marksmen from "../../../../../public/marksmen.png";
import mages from "../../../../../public/mages.png";
import supports from "../../../../../public/supports.png";
import tanks from "../../../../../public/tanks.png";
import Standard2 from "@/components/common/text/standard/Standard2";
import Heading5 from "@/components/common/text/heading/Heading5";
import { Role } from "./utils/types";

export default function ChampHighlight({
	activeRole,
	roles,
}: {
	activeRole: string;
	roles: Role[];
}) {
	const highlightedChamp = roles.find((role) => role.label === activeRole);
	return (
		<div className="w-[50%] flex flex-col items-center justify-center text-center">
			<div className="w-[100%] h-[500px] relative">
				<Image
					src={fighters}
					fill
					className={`transition-all duration-500 object-contain object-center opacity-0
					${activeRole === "Fighters" ? "opacity-100" : ""}
					`}
					alt="sample"
				/>
				<Image
					src={assassins}
					fill
					className={`transition-all duration-500 object-contain object-center opacity-0
					${activeRole === "Assassins" ? "opacity-100" : ""}
					`}
					alt="sample"
				/>
				<Image
					src={marksmen}
					fill
					className={`transition-all duration-500 object-contain object-center opacity-0
					${activeRole === "Marksmen" ? "opacity-100" : ""}
					`}
					alt="sample"
				/>
				<Image
					src={supports}
					fill
					className={`transition-all duration-500 object-contain object-center opacity-0
					${activeRole === "Supports" ? "opacity-100" : ""}
					`}
					alt="sample"
				/>
				<Image
					src={tanks}
					fill
					className={`transition-all duration-500 object-contain object-center opacity-0
					${activeRole === "Tanks" ? "opacity-100" : ""}
					`}
					alt="sample"
				/>
				<Image
					src={mages}
					fill
					className={`transition-all duration-500 object-contain object-center opacity-0
					${activeRole === "Mages" ? "opacity-100" : ""}
					`}
					alt="sample"
				/>
			</div>
			<div>
				<Heading5>{highlightedChamp?.champName}</Heading5>
				<Standard2>{highlightedChamp?.champTitle}</Standard2>
			</div>
		</div>
	);
}
