import Link from "next/link";
import Heading6 from "../text/heading/Heading6";

export default function HeaderLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	return (
		<li className="[background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(200,170,110,0.2)_100%)]">
			<Link
				href={href}
				className="flex items-center h-[80px] px-[25px] transition-all duration-300 bg-grey-hextech-black hover:bg-transparent text-center"
			>
				<Heading6>{children}</Heading6>
			</Link>
		</li>
	);
}
