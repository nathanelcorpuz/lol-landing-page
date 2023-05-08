import ChampSelect from "@/components/pages/home/champ-select/ChampSelect";
import GameModes from "@/components/pages/home/game-modes/GameModes";
import HomeHero from "@/components/pages/home/HomeHero";
import SlayWithStyle from "@/components/pages/home/slay-with-style/SlayWithStyle";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HomeHero />
			<ChampSelect />
			<SlayWithStyle />
			<GameModes />
		</main>
	);
}
