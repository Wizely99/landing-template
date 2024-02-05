'use client'
import Camp from "@/components/Camp";
import { CarouselPlugin } from "@/components/Carousel";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  return (
    <>
      <RevealSection>
      <Hero />

      </RevealSection> <RevealSection>
      <Camp />

      </RevealSection>
      <RevealSection>
        
        <CarouselPlugin />
        </RevealSection>
      <RevealSection>

      <Features />
          
      </RevealSection>
        <RevealSection>
      <GetApp />
      </RevealSection>
    </>
  )
}
