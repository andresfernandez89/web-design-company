import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Let's Create Together</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Get in touch with us.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-lg">contact@codecanvas.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span className="text-lg">+1 (234) 567-890</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}