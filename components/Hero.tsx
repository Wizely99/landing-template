"use client";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container min-h-screen padding-container relative flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}
      <div className="absolute opacity-10 min-h-screen spacer layer2"></div>
      {/* 
      <div className="dot-container">
        <div className="dot dot-2"></div>
      </div> */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
        <h1 className=" gradient-header bold-52 lg:text-[64px] font-bold uppercase">
          Elevate Your Beverage
        </h1>
        <p className="text-2xl mt-6 text-gray-30 xl:max-w-[520px]">
          Unlock Growth Opportunities with Our Feature-Rich Software,
          Revolutionizing Beverage Sales Tracking.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            <span className="regular-16 lg:regular-20 ml-1">
              Top sales software for your business.
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Try Now Free" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
