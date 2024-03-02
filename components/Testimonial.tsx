import React from "react";
export interface TestimonialItemProps {
  id: number | string;
  title: string;
  content: string;
  name: string;
  location: string;
}
import { data as TestimonialData } from "./testimonial.data";
export const TestimonialItem = ({
  id,
  title,
  content,
  name,
  location,
}: TestimonialItemProps) => {
  return (
    <div
      key={id}
      className=" shadow-xl m-0 sm:m-2 md:m-4 p-2 sm:p-4 md:p-8 space-y-4 rounded-3xl"
    >
      <div className="text-2xl font-serif font-bold"> {title}</div>
      <div className="text-clip line-clamp-4">{content}</div>
      <div className="flex gap-4">
        <div className="size-4 h-12 w-12 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-full"></div>
        <div className=" flex flex-col">
          <div className="font-semibold">{name}</div>
          <div className="location">{location}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="m-10 py-4 sm:py-8 px-0 sm:px-12 md:px-20 ">
      <div className=" text-3xl sm:text-4xl md:text-5xl text-center">
        Love from our customers 😊
      </div>
      <div className="absolute transform -translate-x-36 opacity-5 min-h-screen spacer layer2"></div>

      <div className="sm:grid-cols-2 gap-8 grid my-4">
        {TestimonialData.map((item, index) => (
          <div key={index}>
            {/* {item.content} */}
            <TestimonialItem
              id={item.id}
              title={item.title}
              content={item.content}
              location={item.location}
              name={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
