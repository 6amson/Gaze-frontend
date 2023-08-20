import noSubFormIcon from "../../../../public/svgs/profile/nosub-form.svg";
import Image from "next/image";

export default function ProfileNoSubs() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden font-raleWay ">
      <div className="sm:border sm:border-black sm:bg-[#EBEBEB] sm:mt-[90px] mt-[30px]  overflow-hidden relative flex items-center justify-center ">
        <div className="h-fit w-fit sm:py-[15px] sm:px-[66px] py-[13px] px-[10px] bg-white sm:absolute border border-black flex flex-col items-center">
          <div className="text-center mb-[8px] font-bold text-[0.8rem] sm:text-[1rem]">
            YOU ARE NOT SUBSCRIBED TO ANY COLLECTION
          </div>
          <div className="text-center text-[0.75rem] sm:text-[0.8rem] mb-[10px]">
            enter a collection address to begin
          </div>
          <div className="flex border border-black rounded-[3px] overflow-hidden sm:w-fit w-full">
            <input className="px-[10px] w-full sm:w-fit "></input>
            <button className="text-[0.8rem] bg-neonGreen  p-[10px] font-bold border-l border-black">
              Subscribe
            </button>
          </div>
        </div>
        <Image
          src={noSubFormIcon.src}
          width={600}
          className={"hidden sm:block"}
          height={400}
          alt={"arrows"}
        ></Image>
      </div>
    </div>
  );
}
