import Hero from "./components/landingpage/Hero";
import HowToGetStarted from "./components/landingpage/HowToGetStarted";
import Header from "./components/globals/Header";

export default function Index() {
  return (
    <div className=" h-screen bg-black   text-4xl">
      <div className="fixed w-full z-40">
        <Header></Header>
      </div>
      <Hero></Hero>
      <HowToGetStarted></HowToGetStarted>
    </div>
  );
}
