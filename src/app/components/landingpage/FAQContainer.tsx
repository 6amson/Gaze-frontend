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

      answer: (
        <div>
          Click on the Faq button or for mobile, open the drop down menu and
          then click on the faq button to be directed to the How to get Started
          Section.
        </div>
      ),
    },
    {
      question: "How do i access my notifications in Gaze",
      isOpen: false,
      answer: (
        <div>
          {" "}
          Sign up for a Gaze account, subscribe to notifications with a contract
          address. Check the notification segment on the dashboard.
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
            mainnet e.g Optimism, Arbitrium.
          </div>{" "}
          <div> ii - You rejected the push notification request. </div>
        </div>
      ),
    },
    {
      question: "What devices does Gaze support?",
      isOpen: false,
      answer: (
        <div>
          {" "}
          Gaze works on laptps and android devices. Support for ios will be
          introduced soon.
        </div>
      ),
    },
    {
      question: "What is Gaze about?",
      isOpen: false,
      answer: (
        <div>
          {" "}
          Gaze is a push notification service for NFT enthusiasts. It notifies
          you of new mints and transfers for a ft collection.
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
