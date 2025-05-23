
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Rodriguez",
    role: "Operations Manager",
    company: "Avian Farms International",
    testimonial: "Poultry & Pigs Services revolutionized our farm operations with their cutting-edge ventilation system. Their engineering expertise brought our productivity up by 22% within just six months.",
  },
  {
    id: 2,
    name: "Maria Sanchez",
    role: "Owner",
    company: "Sanchez Pork Products",
    testimonial: "The custom feeding system designed by Poultry & Pigs Services for our pig farm has been a game-changer. Their attention to detail and focus on animal welfare has improved both our productivity and compliance standards.",
  },
  {
    id: 3,
    name: "Robert Chen",
    role: "Technical Director",
    company: "Chen Poultry Holdings",
    testimonial: "Their maintenance services keep our operations running smoothly. The team is responsive, professional, and truly understands the unique challenges of large-scale poultry farming.",
  },
  {
    id: 4,
    name: "Ana Gutierrez",
    role: "CEO",
    company: "Sustainable Farms Co.",
    testimonial: "Working with Poultry & Pigs Services on our energy efficiency project exceeded our expectations. They helped us reduce energy costs by 30% while improving animal welfare conditions.",
  },
  {
    id: 5,
    name: "Thomas Williams",
    role: "Farm Manager",
    company: "Williams Family Farms",
    testimonial: "The control systems implemented by their team have given us unprecedented precision in managing our operations. Their engineering excellence is matched only by their customer service.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading agricultural operations across the industry
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl px-8">
          <Carousel
            opts={{ 
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/1 lg:basis-1/2">
                  <Card className="h-full border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 text-primary">
                        <Quote className="h-8 w-8" />
                      </div>
                      <p className="text-foreground italic mb-6 flex-grow">
                        "{testimonial.testimonial}"
                      </p>
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static mx-2 transform-none" />
              <CarouselNext className="static mx-2 transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
