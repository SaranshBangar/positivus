import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type TestimonialType = {
  id: number;
  quote: string;
  author: string;
  position: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John1",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John2",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 3,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John3",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 4,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John4",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 5,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John5",
    position: "Marketing Director at XYZ Corp",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="md:mt-[138px] md:mb-[107px] mt-[70px] mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="bg-accent py-2 px-4 rounded-md">
            <h2>Testimonials</h2>
          </div>
          <p>
            Hear From Our Satisfied Clients: Read Our Testimonials
            <br />
            to Learn More about Our Digital Marketing Services
          </p>
        </div>

        <div className="mt-10 md:mt-[80px] relative">
          <Card className="bg-dark text-light overflow-hidden border-none rounded-[45px]">
            <CardContent className="p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="hidden md:block">
                  {testimonials[currentSlide % testimonials.length] && (
                    <div className="p-4 border border-accent/50 rounded-[36px] relative">
                      <p className="text-sm md:text-base mb-6">"{testimonials[currentSlide % testimonials.length].quote}"</p>
                      <div>
                        <p className="text-accent font-medium">{testimonials[currentSlide % testimonials.length].author}</p>
                        <p className="text-sm text-light/70">{testimonials[currentSlide % testimonials.length].position}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:col-span-1">
                  {testimonials[(currentSlide + 1) % testimonials.length] && (
                    <div className="p-4 border border-accent/50 rounded-[36px] relative">
                      <p className="text-sm md:text-base mb-6">"{testimonials[(currentSlide + 1) % testimonials.length].quote}"</p>
                      <div>
                        <p className="text-accent font-medium">{testimonials[(currentSlide + 1) % testimonials.length].author}</p>
                        <p className="text-sm text-light/70">{testimonials[(currentSlide + 1) % testimonials.length].position}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="hidden lg:block">
                  {testimonials[(currentSlide + 2) % testimonials.length] && (
                    <div className="p-4 border border-accent/50 rounded-[36px] relative">
                      <p className="text-sm md:text-base mb-6">"{testimonials[(currentSlide + 2) % testimonials.length].quote}"</p>
                      <div>
                        <p className="text-accent font-medium">{testimonials[(currentSlide + 2) % testimonials.length].author}</p>
                        <p className="text-sm text-light/70">{testimonials[(currentSlide + 2) % testimonials.length].position}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 flex justify-between items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevSlide}
                className="bg-transparent border-accent/20 hover:bg-accent/10 text-light rounded-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only">Previous</span>
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-sm ${index === currentSlide % testimonials.length ? "bg-accent" : "bg-accent/30"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNextSlide}
                className="bg-transparent border-accent/20 hover:bg-accent/10 text-light rounded-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only">Next</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
