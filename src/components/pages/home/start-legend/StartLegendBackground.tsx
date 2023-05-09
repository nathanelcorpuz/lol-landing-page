import map from "../../../../../public/map.png";
import Image from "next/image";

export default function StartLegendBackground() {
	return (
		<div className=" w-[100%] h-[100vh]">
			<Image
				src={map}
				alt="summoner's rift map"
				fill
				className="object-cover object-center opacity-[0.25]"
			/>
			<span
				className="absolute top-0 right-0 bottom-0 left-0 
          [background:linear-gradient(180deg,#010A13_0%,rgba(0,0,0,0)_50%),linear-gradient(180deg,rgba(0,0,0,0)_50%,#010A13_100%)]"
			/>
		</div>
	);
}
