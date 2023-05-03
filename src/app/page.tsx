export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<video
				muted
				autoPlay
				loop
				src={"/bg-ambience-3.mp4"}
				style={{ width: "100%", backgroundColor: "rgb(0,0,0,0.1)" }}
			/>
			<h1 className="font-beaufort font-[300]">League of Legends</h1>
		</main>
	);
}
