import ChampSelect from "@/components/pages/home/champ-select/ChampSelect";
import GameModes from "@/components/pages/home/game-modes/GameModes";
import HomeHero from "@/components/pages/home/HomeHero";
import MoreToDiscover from "@/components/pages/home/more-to-discover/MoreToDiscover";
import SlayWithStyle from "@/components/pages/home/slay-with-style/SlayWithStyle";
import StartLegend from "@/components/pages/home/start-legend/StartLegend";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HomeHero />
			<ChampSelect />
			<SlayWithStyle />
			<GameModes />
			<StartLegend />
			<MoreToDiscover />
		</main>
	);
}
