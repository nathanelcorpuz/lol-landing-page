import ChampSelect from "@/components/pages/home/ChampSelect";
import HomeHero from "@/components/pages/home/HomeHero";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HomeHero />
			<ChampSelect />
		</main>
	);
}
