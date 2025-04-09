import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const partnerImages = [
  "/partners/amazon.svg",
  "/partners/dribbble.svg",
  "/partners/hubspot.svg",
  "/partners/netflix.svg",
  "/partners/notion.svg",
  "/partners/zoom.svg",
  "/partners/amazon.svg",
  "/partners/dribbble.svg",
  "/partners/hubspot.svg",
  "/partners/netflix.svg",
  "/partners/notion.svg",
  "/partners/zoom.svg",
];

const Partner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const firstHalf = partnerImages.slice(0, 6);
  const secondHalf = partnerImages.slice(3, 9);

  const renderCarousel = (images: string[]) => (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
        slidesToScroll: 1,
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className={`${isMobile ? "basis-1/3" : "md:basis-1/3 lg:basis-1/6"}`}>
            <div className="p-2 h-24 flex items-center justify-center">
              <img src={src} alt={`Partner ${index + 1 > 6 ? index - 5 : index + 1}`} className="object-contain w-full h-full" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );

  return (
    <div className="w-full md:mt-[70px] md:mb-[140px] my-[60px]">
      {isMobile ? (
        <div className="space-y-6">
          {renderCarousel(firstHalf)}
          {renderCarousel(secondHalf)}
        </div>
      ) : (
        renderCarousel(partnerImages)
      )}
    </div>
  );
};

export default Partner;
