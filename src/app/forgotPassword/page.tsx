"use client";
import confusedSpaceMan from "../../../public/svgs/password-recovery/confused-space-man.svg";
import Image from "next/image";
import { useState } from "react";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <div className="absolute border-black font-raleWay xl:w-fit w-[80vw] bg-white flex flex-col items-center justify-center p-2 border  backdrop-blur-sm">
      <Image
        src={confusedSpaceMan}
        width={200}
        height={400}
        unoptimized={true}
        className={" z-0  w-[30vw] sm:w-[200px]"}
        alt={"confused space man "}
      ></Image>
      <div className="border-t border-black p-2 text-center uppercase">
        Enter your email and click send to recieve an email and begin recovery
      </div>
      <div className="flex mt-[10px] pb-[10px]">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="border p-2 rounded-[12px] border-black border-r-0 rounded-r-none outline-none"
        ></input>
        <button className="bg-spacePurple px-4 text-white rounded-r-[12px]">
          send
        </button>
      </div>
    </div>
  );
}