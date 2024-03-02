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
    Autoplay({ delay: 2000, stopOnInteraction: false })
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

      <div className="mt-12 w-full justify-center max-w-5xl gap-4 py-6 px-8 md:py-8 md:px-12 rounded-lg shadow-md flex items-center transition duration-300 ease-in-out">
        <p className="text-center text-gray-800 text-sm md:text-base lg:text-lg">
          Upgrade to our POS for seamless transactions and enhanced efficiency!
        </p>
        <button className="whitespace-nowrap w-28 text-sm bg-gradient-to-r from-purple-500 to-purple-600 text-white   font-bold py-3 px-6 rounded-md shadow-md hover:bg-purple-100 transition duration-500 ease-in-out">
          Start Now
        </button>
      </div>
    </div>
  );
}
