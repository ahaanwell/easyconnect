// src/components/FAQ.jsx
"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is EasyConnect?",
    answer:
      "EasyConnect is a Windows application that helps users automatically detect, download, and install the latest drivers for their PC. It’s designed to make computer maintenance easier and more reliable.",
  },
  {
    question: "How does EasyConnect help my computer?",
    answer:
      "By keeping your device drivers up to date, EasyConnect helps improve system stability and ensures your hardware runs as intended. It simplifies the process of managing driver updates safely.",
  },
  {
    question: "Is EasyConnect safe to use?",
    answer:
      "Yes. EasyConnect uses secure methods to check for updates and only installs trusted drivers that match your system specifications.",
  },
  {
    question: "Do I need technical skills to use EasyConnect?",
    answer:
      "No technical experience is needed. EasyConnect’s step-by-step interface guides you through the update process automatically.",
  },
  {
    question: "Will EasyConnect make my computer faster?",
    answer:
      "While individual results may vary, updating outdated drivers can help your PC operate more efficiently and reduce potential performance issues.",
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#04121d] py-10 w-full">
      <div className="container mx-auto flex flex-col items-center gap-10 px-4 md:px-20">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-white leading-snug">
          Frequently Asked <span className="text-sky-500">Questions</span>
        </h2>

        <div className="w-full max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-700 pb-2 text-white">
      <button
        onClick={onClick}
        className="w-full text-left text-lg cursor-pointer font-medium flex justify-between items-center"
        aria-expanded={isOpen}
      >
        {faq.question}
        <span className="text-sky-500 text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          transition: "max-height 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p className="mt-2 text-gray-300">{faq.answer}</p>
      </div>
    </div>
  );
}
