export default function Heading5({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) {
	return (
		<h5
			className={`text-h5 leading-[24px] tracking-[1.4px] text-gold-1 font-beaufort font-bold uppercase ${className}`}
		>
			{children}
		</h5>
	);
}
