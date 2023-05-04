export default function ButtonLink({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<p className="cursor-pointer text-h6 font-bold leading-[19px] tracking-[1.1px] text-gold-2 transition-all duration-300 hover:[text-shadow:_0px_0px_2px_#C8AA6E;]">
			{children}
		</p>
	);
}
