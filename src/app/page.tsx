"use client";
import Hero from "./components/landingpage/Hero";
import HowToGetStarted from "./components/landingpage/HowToGetStarted";
import Header from "./components/globals/Header";
import FAQ from "./components/landingpage/FAQ";
import Footer from "./components/landingpage/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      /*  console.log(e); */
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className=" h-fit    text-4xl">
      <div className="fixed w-full z-40 top-0">
        <Header></Header>
      </div>

      <Hero></Hero>
      <HowToGetStarted></HowToGetStarted>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}
