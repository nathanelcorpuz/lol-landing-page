import NormalButton from "@/components/common/button/NormalButton";
import Standard1 from "@/components/common/text/standard/Standard1";
import frame from "../../../../../public/vid-frame.png";
import Image from "next/image";
import { Role } from "./utils/types";

export default function VideoHighlight({
	activeRole,
	roles,
}: {
	activeRole: string;
	roles: Role[];
}) {
	return (
		<div className="flex flex-col gap-[55px] w-[50%] items-start justify-center">
			<div className="relative w-[fit-content] scale-[1]">
				<Image src={frame} width={500} height={200} alt="video frame" />
				<div className="flex absolute top-[5px] right-0 left-0 items-center justify-center">
					<video
						autoPlay
						muted
						loop
						src={`/${activeRole.toLowerCase()}.webm`}
						className="w-[490px]"
					/>
				</div>
			</div>
			<div className="w-[550px]">
				<Standard1>
					<>
						{roles.find((role) => role.label === activeRole)?.roleDescription}
					</>
				</Standard1>
			</div>
			<div className="w-[fit-content] ms-[20px]">
				<NormalButton />
			</div>
		</div>
	);
}
