import React from "react";

const Hero = () => {
  return (
    <section className="section-hero relative overflow-y-hidden">
      <div className="max-w-[1180px] mx-auto mt-[50px]">
        <div className="flex md:flex-row-reverse px-5 flex-wrap space-y-4">
          <div className="w-full lg:w-1/2 space-y-3 flex items-center">
            <img
              src="./dashboard.jpg"
              className="d-block max-w-[100%] h-auto mx-auto"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl font-bold text-center lg:text-left md:text-3xl lg:text-7xl">
              Empower Your Sales, Elevate with QuenchX.
            </h1>
            <img
              src="./images/line.svg"
              className="mt-[20px] md:mt-[30px] w-[200px] md:w-[60%] lg:w-[90%] block mx-auto lg:mx-0 "
              alt=""
            />
            <p className="text-center lg:text-left mt-[30px] md:mx-auto md:max-w-[500px] lg:mx-0">
              Unlock Growth Opportunities with Our Feature-Rich Software,
              Revolutionizing Sales Tracking.
            </p>

            <div className="buttons mt-[40px] flex items-center justify-center lg:justify-start">
              <button className="rounded-full  bg-[#7b16a6]  px-7 py-4 ease-in duration-300 hover:bg-[#2F9870] text-white ">
                Try free trial
              </button>
              <button className="ml-7">
                <span className="flex items-center">
                  <img src="./images/play.png" className="mr-2" alt="" />
                  View Demo
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
