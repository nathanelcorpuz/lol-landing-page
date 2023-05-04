import Image from "next/image";
import type { Role } from "./utils/types";
import Heading6 from "@/components/common/text/heading/Heading6";
import { Dispatch } from "react";

export default function RoleButtons({
	roles,
	activeRole,
	setActiveRole,
}: {
	roles: Role[];
	activeRole: string;
	setActiveRole: Dispatch<string>;
}) {
	return (
		<div className="max-w-[1600px] flex items-center justify-center m-auto">
			{roles.map((role) => {
				// WIP: must update UI for matched active role
				return (
					<div
						key={role.label}
						className="[background:radial-gradient(50%_50%_at_50%_50%,#32281E_0%,#32281E_0.01%,#040C14_93.23%,#010A13_100%);]"
					>
						<div
							key={role.label}
							className="z-100 flex flex-col gap-[4px] w-[250px] h-[250px] items-center justify-center transition-all duration-500 cursor-pointer bg-grey-hextech-black hover:bg-transparent
              hover:scale-[1.1]"
							onClick={() => setActiveRole(role.label)}
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
	);
}
