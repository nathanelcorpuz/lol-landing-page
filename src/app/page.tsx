import HextechButton from "@/components/button/HextechButton";
import NormalButton from "@/components/button/NormalButton";
import NormalHextechButton from "@/components/button/NormalHextechButton";
import Heading1 from "@/components/text/heading/Heading1";
import Heading2 from "@/components/text/heading/Heading2";
import Heading3 from "@/components/text/heading/Heading3";
import Heading4 from "@/components/text/heading/Heading4";
import Heading5 from "@/components/text/heading/Heading5";
import Heading6 from "@/components/text/heading/Heading6";
import Standard1 from "@/components/text/standard/Standard1";
import Standard2 from "@/components/text/standard/Standard2";
import Standard3 from "@/components/text/standard/Standard3";
import Standard4 from "@/components/text/standard/Standard4";

export default function Home() {
	return (
		<main className="pt-36 flex justify-center items-center gap-36 flex-wrap">
			{/* text standards */}
			{/* <Standard1>Sample text</Standard1>
			<Standard2>Sample text</Standard2>
			<Standard3>Sample text</Standard3>
			<Standard4>Sample text</Standard4> */}

			{/* text headings */}
			{/* <Heading1>Sample heading 1</Heading1>
			<Heading2>Sample heading 2</Heading2>
			<Heading3>Sample heading 3</Heading3>
			<Heading4>Sample heading 4</Heading4>
			<Heading5>Sample heading 5</Heading5>
			<Heading6>Sample heading 6</Heading6> */}

			{/* buttons */}
			{/* <NormalButton />
			<NormalHextechButton text="DISCOVER MORE CHAMPIONS" />
			<HextechButton /> */}
		</main>
	);
}
