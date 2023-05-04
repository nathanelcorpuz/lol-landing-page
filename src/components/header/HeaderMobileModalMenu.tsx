import Image from "next/image";
import Link from "next/link";
import userIcon from "../../../public/user.png";
import globe from "../../../public/globe.png";
import Heading6 from "../text/heading/Heading6";
import lol from "../../../public/lol-icon.png";

export default function HeaderMobileModalMenu({
	setIsModalOpen,
}: {
	setIsModalOpen: (value: boolean) => void;
}) {
	return (
		<div className="flex justify-between h-[80px] items-center px-[15px] border-b border-b-gold-6">
			<div className="flex w-[150px]">
				<Link
					href="#"
					className="px-[15px] py-[10px] bg-grey-hextech-black hover:bg-transparent flex items-center transition-all duration-300"
				>
					<Image src={userIcon} alt="user icon" width={25} height={25} />
				</Link>
				<Link
					href="#"
					className="px-[15px] py-[10px] bg-grey-hextech-black hover:bg-transparent flex items-center transition-all duration-300"
				>
					<Image src={globe} alt="globe icon" width={25} height={25} />
				</Link>
			</div>
			<Link
				href="#"
				className="w-[150px] h-[80px] px-[40px] flex items-center justify-center"
			>
				<Image src={lol} alt="league of legends icon" width={40} height={40} />
			</Link>
			<div className="w-[150px] flex justify-end">
				<button className="p-[15px]" onClick={() => setIsModalOpen(false)}>
					<Heading6>Close</Heading6>
				</button>
			</div>
		</div>
	);
}
