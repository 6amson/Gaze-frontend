"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";
import Image from "next/image";
import faqWindowIcon from "../../../../public/svgs/landing-page/faq-window-icon.svg";

export default function FAQContainer() {
  const [FAQs, setFAQs] = useState([
    {
      question: "How do i get started with Gaze?",
      isOpen: false,

      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum debitis excepturi nobis quasi! Facilis voluptatum totam nostrum rem sequi",
    },
    {
      question: "How do i access my notifications in Gaze",
      isOpen: false,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum debitis excepturi nobis quasi! Facilis voluptatum totam nostrum rem sequi",
    },
    {
      question: "How do i get started with Gaze?",
      isOpen: false,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum debitis excepturi nobis quasi! Facilis voluptatum totam nostrum rem sequi",
    },
    {
      question: "How do i get started with Gaze?",
      isOpen: false,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum debitis excepturi nobis quasi! Facilis voluptatum totam nostrum rem sequi",
    },
  ]);
  const handleArrowClick = (questionIndex: number) => {
    setFAQs((prev) => {
      return prev.map((item, index) => {
        if (index === questionIndex) {
          item.isOpen = !item.isOpen;
        } else {
          item.isOpen = false;
        }
        return item;
      });
    });
  };
  return (
    <div className=" lg:px-[10vw] sm:px-[6vw]  ">
      <div className="sm:border-[3px] border-black rounded-t-[25px] rounded-b-[20px] pb-[40px] ">
        {" "}
        <div className="h-[75px] bg-black sm:flex relative w-full rounded-t-[20px] hidden items-center z-20">
          <Image
            src={faqWindowIcon.src}
            width={130}
            height={100}
            className="absolute right-[5%]"
            alt="macbook triple dot icon"
          ></Image>
        </div>
        <div className="flex flex-col items-center gap-y-[24px] mt-[35px] 2xl:px-[40px] sm:px-[20px] ">
          {FAQs.map((item, index) => {
            return (
              <FAQItem
                key={index}
                handleArrowClick={handleArrowClick}
                isOpen={item.isOpen}
                question={item.question}
                index={index}
                answer={item.answer}
              ></FAQItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
