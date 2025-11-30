import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, LayoutTemplate, Rocket, TrendingUp } from "lucide-react";

export function Services({ dict }: { dict: any }) {
  const services = [
    {
      icon: <LayoutTemplate className="h-10 w-10 text-primary" />,
      title: dict['services.web.title'],
      description: dict['services.web.desc'],
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: dict['services.dev.title'],
      description: dict['services.dev.desc'],
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: dict['services.ecommerce.title'],
      description: dict['services.ecommerce.desc'],
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: dict['services.seo.title'],
      description: dict['services.seo.desc'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">{dict['services.title']}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict['services.subtitle']}
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
