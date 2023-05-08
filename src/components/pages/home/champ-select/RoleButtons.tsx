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
		<div
			className="
		max-w-[1600px] flex items-center
		xs:justify-start lg:justify-center
		border-b border-b-gold-2
		xl:border-0
		m-auto overflow-auto overflow-y-hidden"
		>
			{roles.map((role) => {
				const isActive = activeRole === role.label;
				return (
					<div
						key={role.label}
						className="[background:radial-gradient(50%_50%_at_50%_50%,#32281E_0%,#32281E_0.01%,#040C14_93.23%,#010A13_100%);]"
					>
						<div
							key={role.label}
							className="z-100 flex flex-col gap-[4px] w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] items-center justify-center transition-all duration-500 cursor-pointer bg-grey-hextech-black hover:bg-transparent
              hover:scale-[1.1]"
							onClick={() => setActiveRole(role.label)}
						>
							<div
								className={`transition-all duration-500 opacity-[0.3] ${
									isActive ? "opacity-[1] scale-[1.2]" : ""
								}`}
							>
								<Image
									src={role.icon}
									width={50}
									height={50}
									alt={`${role.label} logo`}
								/>
							</div>
							<div
								className={`transition-all duration-500 opacity-[0.3] ${
									isActive ? "opacity-[1] scale-[1.2]" : ""
								}`}
							>
								<Heading6>{role.label}</Heading6>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
