import FAQContainer from "./FAQContainer";
import FAQMail from "../../../../public/svgs/landing-page/faq-mail.svg";
import Image from "next/image";

export default function FAQ() {
  return (
    <div id="faq" className="h-fit bg-white w-full sm:pb-[8%] faq">
      {/* Laptop header */}
      <div className="hidden items-center sm:flex sm:flex-row pt-[57px] mb-[50px]  lg:px-[10vw] sm:px-[6vw] sm:gap-x-[10px]">
        <div className="text-[1.5rem] font-bold  sm:text-[2.3rem] leading-none ">
          F.A.Q
        </div>
        <Image
          src={FAQMail.src}
          alt="email-icon"
          width={52}
          className="mt-3 sm:mt-0"
          height={100}
        ></Image>
      </div>
      {/* Mobile header */}
      <div className="flex flex-col items-center  sm:hidden  pt-[37px]">
        <Image
          src={FAQMail.src}
          alt="email-icon"
          width={52}
          className="mt-3 sm:mt-0"
          height={100}
        ></Image>
        <div className="text-[1.5rem] font-bold  sm:text-[2.5rem] leading-none pt-[12px] ">
          F.A.Q
        </div>
      </div>
      <FAQContainer></FAQContainer>
    </div>
  );
}
