import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-background -z-10">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(115,126,211,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-20%] right-[5%] top-auto h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(145,138,227,0.1),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/60">
            We Weave Digital Masterpieces
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
            From elegant landing pages to complex web applications, CodeCanvas
            transforms your vision into a stunning digital reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button asChild size="lg" className="font-bold text-lg">
              <Link href="#contact">Start a Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold text-lg">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
