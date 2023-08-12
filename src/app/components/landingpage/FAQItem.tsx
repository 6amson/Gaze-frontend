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
    <div className="text-[0.8rem] items-center relative rounded-[10px] w-[80vw] font-raleWay flex gap-x-[10px] px-[25px] py-[17px] border-2 border-black">
      <div className="leading-tight pr-[20px]">
        {props.question}
        <div className={`${props.isOpen ? "" : "hidden"}`}>
          answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus eum debitis excepturi nobis quasi! Facilis voluptatum totam
          nostrum rem sequi",
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
          className=""
          alt="faq question arrow"
        ></Image>
      </button>
    </div>
  );
}
