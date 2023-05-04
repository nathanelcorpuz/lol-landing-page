import assassinChamp from "../../../../../../public/assassins.png";
import assassinIcon from "../../../../../../public/assassin-icon.png";
import fighterChamp from "../../../../../../public/fighters.png";
import fighterIcon from "../../../../../../public/fighter-icon.png";
import marksmanChamp from "../../../../../../public/marksmen.png";
import marksmenIcon from "../../../../../../public/marksmen-icon.png";
import mageChamp from "../../../../../../public/mages.png";
import mageIcon from "../../../../../../public/mage-icon.png";
import supportChamp from "../../../../../../public/supports.png";
import supportIcon from "../../../../../../public/support-icon.png";
import tankChamp from "../../../../../../public/tanks.png";
import tankIcon from "../../../../../../public/tank-icon.png";

import { Role } from "./types";

export const roles: Role[] = [
	{
		champImg: assassinChamp,
		icon: assassinIcon,
		label: "Assassins",
		champName: "Akali",
		champTitle: "The Rogue Assassin",
		roleDescription:
			"Specialize in taking down key targets with high damage output and mobility, disrupting enemy strategies and securing objectives for your team.",
	},
	{
		champImg: fighterChamp,
		icon: fighterIcon,
		label: "Fighters",
		champName: "Yasuo",
		champTitle: "The Unforgiven",
		roleDescription:
			"Excel in close-range combat and initiate team fights. With high damage output and durability, you are a key player to secure objectives and take down enemy champions.",
	},
	{
		champImg: marksmanChamp,
		icon: marksmenIcon,
		label: "Marksmen",
		champName: "Jinx",
		champTitle: "The Loose Cannon",
		roleDescription:
			"Rely on ranged attacks to deal consistent damage to enemy champions from a safe distance. Take down opponents and deal sustained damage in team fights.",
	},
	{
		champImg: mageChamp,
		icon: mageIcon,
		label: "Mages",
		champName: "Lux",
		champTitle: "The Lady of Luminosity",
		roleDescription:
			"Deal burst or sustained damage with powerful spells and abilities. Control the battlefield, zone enemies, and deal massive damage in team fights from a safe distance.",
	},
	{
		champImg: supportChamp,
		icon: supportIcon,
		label: "Supports",
		champName: "Thresh",
		champTitle: "The Chain Warden",
		roleDescription:
			"Provide utility and protection to your allies while disrupting the enemy team. Aid your team in achieving objectives, provide crowd control, and help secure kills in team fights.",
	},
	{
		champImg: tankChamp,
		icon: tankIcon,
		label: "Tanks",
		champName: "Leona",
		champTitle: "The Radiant Dawn",
		roleDescription:
			"Excel at absorbing damage and initiating team fights in the frontline defense. Protect your team and control the battlefield.",
	},
];
