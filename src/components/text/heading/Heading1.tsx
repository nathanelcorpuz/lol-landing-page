export default function Heading1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="text-h1 leading-[56px] tracking-[2.7px] text-gold-1 font-beaufort font-bold uppercase">
			{children}
		</h1>
	);
}
