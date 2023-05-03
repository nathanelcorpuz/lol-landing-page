import HextechButton from "@/components/button/HextechButton";
import NormalButton from "@/components/button/NormalButton";

export default function Home() {
	return (
		<main className="pt-36 flex justify-center items-center gap-36">
			<NormalButton />
			<HextechButton />
		</main>
	);
}
