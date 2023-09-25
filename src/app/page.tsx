"use client";
import Hero from "./components/landingpage/Hero";
import HowToGetStarted from "./components/landingpage/HowToGetStarted";
import Header from "./components/globals/Header";
import FAQ from "./components/landingpage/FAQ";
import Footer from "./components/landingpage/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useState } from "react";
import LoadingPage from "./loading";
import HowToGetStartedNew from "./components/landingpage/HowToGetStartedNew/HowToGetStartedNew";
import { AnimatePresence } from "framer-motion";

export default function Index() {
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className=" h-fit    text-4xl">
      <button
        onClick={() => {
          setLoading((prev) => !prev);
        }}
        className="absolute bottom-[10px]"
      >
        do something
      </button>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingPage key={"loader"} setLoading={setLoading}></LoadingPage>
        ) : (
          <>
            {" "}
            <Hero loading={loading}></Hero>
            <HowToGetStartedNew></HowToGetStartedNew>
            <FAQ></FAQ>
            <Footer></Footer>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
