import Hero from "./components/landingpage/Hero";
import HowToGetStarted from "./components/landingpage/HowToGetStarted";
import Header from "./components/globals/Header";
import FAQ from "./components/landingpage/FAQ";

export default function Index() {
  return (
    <div className=" h-fit    text-4xl">
      <div className="fixed w-full z-40 top-0">
        <Header></Header>
      </div>

      <Hero></Hero>
      <HowToGetStarted></HowToGetStarted>
      <FAQ></FAQ>
    </div>
  );
}
