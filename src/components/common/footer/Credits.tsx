import Standard2 from "../text/standard/Standard2";

export default function Credits() {
	return (
		<section className=" text-grey-1 italic text-center flex flex-col items-center gap-[10px]">
			<Standard2>
				A recreation of{" "}
				<a
					className="text-gold-2 font-bold"
					href="https://www.leagueoflegends.com/"
					target="_blank"
				>
					League of Legends' home page
				</a>{" "}
				by{" "}
				<a
					className="text-gold-2 font-bold"
					href="https://www.linkedin.com/in/nathanelcorpuz/"
					target="_blank"
				>
					Nathanel Corpuz
				</a>
				.
			</Standard2>
			<Standard2>
				Branding materials by{" "}
				<a
					className="text-gold-2 font-bold"
					href="https://www.riotgames.com/en"
					target="_blank"
				>
					Riot Games
				</a>
				.
			</Standard2>
			<Standard2>
				Click{" "}
				<a
					className="text-gold-2 font-bold"
					href="https://github.com/nathanelcorpuz/lol-landing-page"
					target="_blank"
				>
					here
				</a>
        {" "}for the source code and more information.
			</Standard2>
		</section>
	);
}
