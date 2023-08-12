"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";

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
    <div className="flex flex-col items-center gap-y-[24px]">
      {FAQs.map((item, index) => {
        return (
          <FAQItem
            handleArrowClick={handleArrowClick}
            isOpen={item.isOpen}
            question={item.question}
            index={index}
            answer={item.answer}
          ></FAQItem>
        );
      })}
    </div>
  );
}
