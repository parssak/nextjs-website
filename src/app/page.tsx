import { Button } from "@/components/ui/button";
import { FancyGradient } from "./components/fancy-gradient";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <FancyGradient />
      <div className="max-w-lg px-4 mx-auto pt-24 lg:pt-32 relative font-medium selection:bg-orange-500/10 selection:text-orange-500">
        <h1 className="font-semibold text-4xl tracking-tight">parssa kyanzadeh</h1>
        <p className="text-2xl tracking-tight opacity-80">product engineer</p>

        <p className="mt-12 sm:mt-24 text-lg leading-[1.81] text-balance">
          i like building useful (and fun!) things.
          <br />
          <br />
          currently working on{" "}
          <Button variant="orange" asChild size="sm" className="text-base">
            <Link target="_blank" href="https://hercules.app">
              hercules
            </Link>
          </Button>
          {" — "}
          an agentic app builder, and in my free time i&apos;m building{" "}
          <Button asChild size="sm" className="text-base" variant="lime">
            <Link target="_blank" href="https://gooseparty.gg">
              goose party
            </Link>
          </Button>{" "}which is a party game platform for friends.
          <br />
          <br />
          previously worked on browser agents at{" "}
          <Button asChild size="sm" className="text-base" variant="yellow">
            <Link target="_blank" href="https://perplexity.ai/comet">
              minion ai
            </Link>
          </Button>{" "}
          which is now part of <span className="whitespace-nowrap">Perplexity Comet.</span>
          <br />
          <br />
          before that, i led frontend engineering at{" "}
          <Button asChild size="sm" className="text-base" variant="pink">
            <Link target="_blank" href="https://fig.io/home">
              fig
            </Link>
          </Button>{" , "}
          which was acquired by AWS.
          <br />
          <br />
          you can dm me{" "}
          <Button asChild size="sm" className="text-base" variant="sky">
            <Link target="_blank" href="https://x.com/parssakyanzadeh">
              @parssakyanzadeh
            </Link>
          </Button>{" "}
          on twitter.
        </p>
      </div>
    </>
  );
}
