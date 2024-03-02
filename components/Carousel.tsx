"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CAROUSAL_PICTURES } from "@/constants";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <div className=" flex flex-col justify-center items-center  py-8 ">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl "
        //   onMouseUpCapture={plugin.current.stop}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from(CAROUSAL_PICTURES).map((image, index) => (
            <CarouselItem key={image.key}>
              <div className="p-1">
                <Image
                  src={image.link}
                  alt="boat"
                  width={1440}
                  height={580}
                  className=" w-full object-cover object-center rounded-3xl 2xl:rounded-5xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="px-96 text-3xl py-8 gap-8 flex flex-col w-full">
        <div className="font-semibold text-gray-700">
          Ready to Elevate Your Beverage Sales?
        </div>
        <div className="ml-96 flex text-xl bg-purple-800 text-gray-100 w-fit px-8 py-3 rounded-full justify-end">
          Try Now for free
        </div>
      </div>
    </div>
  );
}
