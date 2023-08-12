import FAQContainer from "./FAQContainer";
import FAQMail from "../../../../public/svgs/landing-page/faq-mail.svg";
import Image from "next/image";

export default function FAQ() {
  return (
    <div className="h-screen bg-white w-full">
      <div className="flex flex-col items-center py-[36px]">
        <Image
          src={FAQMail.src}
          alt="email-icon"
          width={52}
          height={100}
        ></Image>
        <div className="text-[1.5rem] font-bold mt-[12px]">F.A.Q</div>
      </div>
      <FAQContainer></FAQContainer>
    </div>
  );
}
