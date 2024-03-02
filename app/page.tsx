"use client";
import { CarouselPlugin } from "@/components/Carousel";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import RevealSection from "@/components/RevealSection";
import Testimonial from "@/components/Testimonial";
import UserReviewSection from "@/components/UserReviewSection";

export default function Home() {
  return (
    <>
      {/* <RevealSection> */}
      {/* <Hero /> */}
      <Hero2 />
      {/* </RevealSection> */}

      <RevealSection>
        <CarouselPlugin />
      </RevealSection>
      <RevealSection>
        <Features />
      </RevealSection>
      {/* <UserReviewSection /> */}
      <RevealSection>
        <Testimonial />
        {/* <GetApp /> */}
      </RevealSection>
    </>
  );
}
