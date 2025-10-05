import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Clients() {
  const clientImages = PlaceHolderImages.slice(0, 4);

  return (
    <section id="clients" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're proud of the solutions we've delivered. Here's a glimpse of our recent projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {clientImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col">
              <CardContent className="p-0 flex flex-col flex-grow">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    data-ai-hint={image.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-card flex flex-col flex-grow">
                  <h3 className="font-headline text-xl font-semibold capitalize">{image.imageHint.replace('-', ' ')}</h3>
                  <p className="text-muted-foreground mt-2 flex-grow">{image.description}</p>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-4">
                    Visit Website
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}