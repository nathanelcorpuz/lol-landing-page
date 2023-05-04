import type { StaticImageData } from "next/image";

export interface Role {
	champImg: StaticImageData;
	icon: StaticImageData;
	label: string;
	champName: string;
	champTitle: string;
	roleDescription: string;
}
