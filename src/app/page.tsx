"use client";
import Hero from "./components/landingpage/Hero";
import HowToGetStarted from "./components/landingpage/HowToGetStarted";
import Header from "./components/globals/Header";
import FAQ from "./components/landingpage/FAQ";
import Footer from "./components/landingpage/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import HowToGetStartedNew from "./components/landingpage/HowToGetStartedNew/HowToGetStartedNew";

export default function Index() {
  return (
    <div className=" h-fit    text-4xl">
      <Hero></Hero>

      <HowToGetStartedNew></HowToGetStartedNew>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}
