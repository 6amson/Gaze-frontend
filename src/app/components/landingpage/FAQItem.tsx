import faqQuestionArrow from "../../../../public/svgs/landing-page/faq-question-arrow-mobile.svg";
import Image from "next/image";

interface FAQItemProps {
  question: string;
  isOpen: boolean;
  index: number;
  answer: string;
  handleArrowClick: (questionIndex: number) => void;
}

export default function FAQItem(props: FAQItemProps) {
  return (
    <div className="text-[0.8rem] sm:text-[1rem] sm:w-full items-center relative rounded-[10px] w-[80vw] font-raleWay flex gap-x-[10px] px-[25px] py-[17px] border-2 border-black">
      <div className="leading-tight pr-[20px]">
        {props.question}
        <div className={`${props.isOpen ? "" : "hidden"}`}>
          answer: {props.answer}
        </div>
      </div>
      <button
        onClick={() => {
          props.handleArrowClick(props.index);
        }}
        className="absolute right-[24px]"
      >
        <Image
          src={faqQuestionArrow.src}
          width={12}
          height={10}
          className={`lg:w-[16px] ${
            props.isOpen ? "rotate-180" : "rotate-0"
          } duration-300`}
          alt="faq question arrow "
        ></Image>
      </button>
    </div>
  );
}
