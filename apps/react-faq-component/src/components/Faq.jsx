import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

const Faq = () => {
  const [isShow, setIsShow] = useState(0);
  const Faqs = [
    {
      question: 'How many bones does a cat have?',
      answer: 'A cat has 230 bones - 6 more than a human',
    },
    {
      question: 'How much do cats sleep?',
      answer: 'The average cat sleeps 12-16 hours per day',
    },
    {
      question: 'How long do cats live',
      answer:
        'Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.',
    },
  ];

  function showHandle(index) {
    setIsShow((prevIndex) => (prevIndex === index ? -1 : index));
  }

  useEffect(() => {
    setIsShow(0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      {Faqs.map((faq, index) => (
        <div key={index} className="border mt-4 w-[750px] bg-blue-200">
          <div
            className="flex items-center gap-4 "
            onClick={() => showHandle(index)}
          >
            {isShow === index ? (
              <FaChevronUp className="text-2xl text-red-500" />
            ) : (
              <FaChevronDown className="text-2xl text-red-500" />
            )}

            <h3 className="text-3xl font-bold text-black">{faq.question}</h3>
          </div>
          {isShow === index && (
            <p className="text-xl font-semibold text-gray-950 pl-9">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
