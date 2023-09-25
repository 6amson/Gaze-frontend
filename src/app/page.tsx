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
import { useContext } from "react";
import {
  UserPageContext,
  UserPageContextTypes,
} from "./components/UserPageContext";

export default function Index() {
  const {
    connectMetamask,
    ismetaMaskConnected,
    homePageLoading,
    setHomePageLoading,
  } = useContext(UserPageContext) as UserPageContextTypes;
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
      <>
        {" "}
        <Hero loading={true}></Hero>
        <HowToGetStartedNew></HowToGetStartedNew>
        <FAQ></FAQ>
        <Footer></Footer>
      </>
      <div>
        {/* <AnimatePresence mode="wait">
          {homePageLoading ? (
            <LoadingPage
              key={"loader"}
              setLoading={setHomePageLoading}
            ></LoadingPage>
          ) : (
            <>
              {" "}
              <Hero loading={homePageLoading}></Hero>
              <HowToGetStartedNew></HowToGetStartedNew>
              <FAQ></FAQ>
              <Footer></Footer>
            </>
          )}
        </AnimatePresence> */}
      </div>
    </div>
  );
}

