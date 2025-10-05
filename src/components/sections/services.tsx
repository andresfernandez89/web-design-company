import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, LayoutTemplate, Rocket, TrendingUp } from "lucide-react";

const services = [
  {
    icon: <LayoutTemplate className="h-10 w-10 text-primary" />,
    title: "Web Design & UX",
    description: "Creating intuitive and beautiful user interfaces that provide an exceptional user experience.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Custom Development",
    description: "Tailor-made web applications built with modern technologies to meet your specific business needs.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "E-commerce Solutions",
    description: "Powerful and scalable online stores that drive sales and grow with your business.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "SEO & Performance",
    description: "Optimizing your site for search engines and speed, ensuring you reach the widest audience possible.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">What We Do</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a complete suite of services to bring your digital projects to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-background/50 border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <CardHeader>
                {service.icon}
              </CardHeader>
              <CardContent className="flex flex-col gap-2 flex-grow">
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
