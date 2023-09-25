"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";
import Image from "next/image";
import faqWindowIcon from "../../../../public/svgs/landing-page/faq-window-icon.svg";

export default function FAQContainer() {
  const [FAQs, setFAQs] = useState([

    {
      question: "What is Gaze?",
      isOpen: false,
      answer: (
        <div>
          {" "}
          Gaze is a push notification service for NFT enthusiasts. It notifies
          you of new mints and transfers for your preferred NFT collection.
        </div>
      ),
    },
    {
      question: "How do i get started with Gaze?",
      isOpen: false,

      answer: (
        <div>
          Check out our how to get started section.
        </div>
      ),
    },
    {
      question: "What devices does Gaze support?",
      isOpen: false,

      answer: (
        <div>
          {" "}
          Gaze is only supported by windows and Android devices. Support for ios will be
          introduced soon.
        </div>
      ),
    },
    {
      question: "How do i access my notifications?",
      isOpen: false,
      answer: (
        <div>
          {" "}
          When you subscribe to a NFT contract address, you will receive
          notifications on your device. Your notifications
          can also be accessed on the dashboard when you log in.
        </div>
      ),
    },
    {
      question: "Why am i not getting any notifications?",
      isOpen: false,
      answer: (
        <div>
          {" "}
          There are a few reasons why you may not get notifications:{" "}
          <div>
            i - You subscribed to a contract address that isn't on Ethereum
            main network like Optimism, Arbitrium etc.
          </div>{" "}
          <div> ii - You rejected the push notification request. </div>
          {" "}
          <div> iii - The contract address subscribed to isn't for Non-fungible Tokens. </div>
          {" "}
          <div> iv - Your device is not supported. </div>
        </div>
      ),
    },
    {
      question: "Are you guys always this awesome?",
      isOpen: false,
      answer: (
        <div>
          {" "}
          Yes, all day, everyday.
        </div>
      ),
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
