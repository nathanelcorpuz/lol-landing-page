export default function Heading2({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="text-h2 leading-[43px] tracking-[1.9px] text-gold-1 font-beaufort font-bold uppercase">
			{children}
		</h2>
	);
}
