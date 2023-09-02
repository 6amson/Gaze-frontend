import noSubFormIcon from "../../../../public/svgs/profile/nosub-form.svg";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { ToastContainer, toast } from "react-toastify";

interface ProfileNoSubsProps {
  collectionContractAddress: string;
  setCollectionContractAddress: Dispatch<SetStateAction<string>>;
  askPermissionAndUpdate: () => Promise<any>;
}

export default function ProfileNoSubs(props: ProfileNoSubsProps) {
  const handleInput = (input: string) => {
    props.setCollectionContractAddress(input);
  };

  return (
    <div className="w-full h-[90vh] sm:h-full flex items-center justify-center overflow-hidden font-raleWay ">
      <ToastContainer></ToastContainer>
      <div className="border border-black bg-[#EBEBEB] sm:mt-[90px]  sm:h-fit sm:py-0 py-[25px]   overflow-hidden relative flex items-center justify-center ">
        <div className="sm:h-fit  sm:bg-white z-20 w-fit sm:py-[15px] sm:px-[66px]  px-[10px]  sm:absolute sm:border border-black  flex flex-col items-center">
          <div className="text-center mb-[8px] font-bold text-[0.8rem] sm:text-[1rem] hidden sm:block ">
            YOU ARE NOT SUBSCRIBED TO ANY COLLECTION
          </div>
          <div className="text-center text-[0.75rem] sm:text-[0.8rem] mb-[10px] hidden sm:block ">
            enter a collection address to begin
          </div>
          <div className="bg-white sm:hidden p-2 border border-black">
            <div className="text-center mb-[8px] font-bold text-[0.8rem] sm:text-[1rem]">
              YOU ARE NOT SUBSCRIBED TO ANY COLLECTION
            </div>
            <div className="text-center text-[0.75rem] sm:text-[0.8rem] mb-[10px]">
              enter a collection address to begin
            </div>
            <div className="flex sm:hidden border border-black rounded-[3px] overflow-hidden sm:w-fit w-full h-fit">
              <input
                onChange={(e) => {
                  handleInput(e.target.value);
                }}
                className="px-[10px] w-full sm:w-fit outline-none "
              ></input>
              <button
                onClick={() => {
                  /* PlaceHolder Address */
                  props.askPermissionAndUpdate();
                }}
                className="text-[0.8rem] bg-neonGreen  p-[10px] font-bold border-l border-black"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="sm:flex border border-black rounded-[3px] overflow-hidden sm:w-fit w-full h-fit hidden">
            <input
              onChange={(e) => {
                handleInput(e.target.value);
              }}
              className="px-[10px] w-full sm:w-fit outline-none "
            ></input>
            <button
              onClick={() => {
                /* PlaceHolder Address */
                props.askPermissionAndUpdate();
              }}
              className="text-[0.8rem] bg-neonGreen  p-[10px] font-bold border-l border-black"
            >
              Subscribe
            </button>
          </div>
        </div>
        <Image
          src={noSubFormIcon.src}
          width={900}
          className={"sm:hidden absolute block w-[700px]"}
          height={400}
          alt={"arrows"}
        ></Image>
        <Image
          src={noSubFormIcon.src}
          width={600}
          className={"hidden sm:block"}
          height={400}
          alt={"arrows"}
        ></Image>
      </div>
      <ToastContainer />
    </div>
  );
}
