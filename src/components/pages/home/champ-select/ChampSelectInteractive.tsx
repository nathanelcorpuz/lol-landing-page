import Heading1 from "@/components/common/text/heading/Heading1";
import assassinChamp from "../../../../../public/assassins.png";
import assassinIcon from "../../../../../public/assassin-icon.png";
import fighterChamp from "../../../../../public/fighters.png";
import fighterIcon from "../../../../../public/fighter-icon.png";
import marksmanChamp from "../../../../../public/marksmen.png";
import marksmenIcon from "../../../../../public/marksmen-icon.png";
import mageChamp from "../../../../../public/mages.png";
import mageIcon from "../../../../../public/mage-icon.png";
import supportChamp from "../../../../../public/supports.png";
import supportIcon from "../../../../../public/support-icon.png";
import tankChamp from "../../../../../public/tanks.png";
import tankIcon from "../../../../../public/tank-icon.png";
import Image from "next/image";
import Heading3 from "@/components/common/text/heading/Heading3";
import Heading6 from "@/components/common/text/heading/Heading6";

const roles = [
	{
		champImg: assassinChamp,
		icon: assassinIcon,
		label: "Assassins",
		champName: "Akali",
		champTitle: "The Rogue Assassin",
	},
	{
		champImg: fighterChamp,
		icon: fighterIcon,
		label: "Fighters",
		champName: "Yasuo",
		champTitle: "The Unforgiven",
	},
	{
		champImg: marksmanChamp,
		icon: marksmenIcon,
		label: "Marksmen",
		champName: "Jinx",
		champTitle: "The Loose Cannon",
	},
	{
		champImg: mageChamp,
		icon: mageIcon,
		label: "Mages",
		champName: "Lux",
		champTitle: "The Lady of Luminosity",
	},
	{
		champImg: supportChamp,
		icon: supportIcon,
		label: "Supports",
		champName: "Thresh",
		champTitle: "The Chain Warden",
	},
	{
		champImg: tankChamp,
		icon: tankIcon,
		label: "Tanks",
		champName: "Leona",
		champTitle: "The Radiant Dawn",
	},
];

export default function ChampSelectInteractive() {
	return (
		<div className="z-20">
			{/* role buttons */}
			<div className="max-w-[1600px] flex items-center justify-center m-auto">
				{roles.map((role) => {
					return (
						<div
							key={role.label}
							className="[background:radial-gradient(50%_50%_at_50%_50%,#32281E_0%,#32281E_0.01%,#040C14_93.23%,#010A13_100%);]"
						>
							<div
								key={role.label}
								className="z-20 flex flex-col gap-[4px] w-[250px] h-[250px] items-center justify-center transition-all duration-300 cursor-pointer bg-grey-hextech-black hover:bg-transparent"
							>
								<div className="opacity-[0.3]">
									<Image
										src={role.icon}
										width={60}
										height={60}
										alt={`${role.label} logo`}
									/>
								</div>
								<div className="opacity-[0.3]">
									<Heading6>{role.label}</Heading6>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
