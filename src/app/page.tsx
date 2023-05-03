import HextechButton from "@/components/button/HextechButton";
import NormalButton from "@/components/button/NormalButton";
import NormalHextechButton from "@/components/button/NormalHextechButton";

export default function Home() {
	return (
		<main className="pt-36 flex justify-center items-center gap-36 flex-wrap">
			<NormalButton />
			<NormalHextechButton text="DISCOVER MORE CHAMPIONS" />
			<HextechButton />
		</main>
	);
}
