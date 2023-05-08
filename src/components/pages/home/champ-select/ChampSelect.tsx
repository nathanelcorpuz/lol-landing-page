import ChampSelectHero from "./ChampSelectHero";
import ChampSelectInteractive from "./ChampSelectInteractive";

export default function ChampSelect() {
	return (
		<section className="flex flex-col py-[150px]">
			<ChampSelectHero />
			<ChampSelectInteractive />
		</section>
	);
}
