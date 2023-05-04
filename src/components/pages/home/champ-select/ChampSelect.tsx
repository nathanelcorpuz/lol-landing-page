import ChampSelectHero from "./ChampSelectHero";
import ChampSelectInteractive from "./ChampSelectInteractive";

export default function ChampSelect() {
	return (
		<section className="flex flex-col">
			<ChampSelectHero />
			<ChampSelectInteractive />
		</section>
	);
}
