export default function Heading3({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="text-h3 leading-[37px] tracking-[1.5px] text-gold-1 font-beaufort font-bold uppercase">
			{children}
		</h3>
	);
}
