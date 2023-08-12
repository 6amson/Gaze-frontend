import HowToGetStartedItem from "./HowToGetStartedItem";

export default function HowToGetStarted() {
  return (
    <div className="h-screen bg-white w-full">
      <div className="w-full h-full sm:h-fit flex flex-col items-center sm:flex-row sm:flex-wrap  sm:justify-center sm:items-start sm:gap-x-[60px] sm:gap-y-[60px]">
        {[1, 2, 3, 4].map((item, index) => {
          return <HowToGetStartedItem key={index}></HowToGetStartedItem>;
        })}
      </div>
    </div>
  );
}
