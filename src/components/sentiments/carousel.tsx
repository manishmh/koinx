import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselCard from "./carousel-card";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      img: "/next.svg",
      bgColor: "bg-blue-600",
    },
    {
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      img: "/next.svg",
      bgColor: "bg-green-600",
    },
    {
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      img: "/next.svg",
      bgColor: "bg-yellow-600",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="relative">
      <div className="flex gap-4 my-4 overflow-hidden">
        <div
          className="bg-white border border-gray-300 w-10 h-10 rounded-full absolute flex justify-center items-center -right-4 top-1/2 -translate-y-1/2 shadow-lg cursor-pointer z-50"
          onClick={handleNext}
        >
          <FaChevronRight />
        </div>
        <div
          className="bg-white border border-gray-300 w-10 h-10 rounded-full absolute flex justify-center items-center -left-4 top-1/2 -translate-y-1/2 shadow-lg cursor-pointer z-50"
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </div>
        {data.map((item, index) => (
          <CarouselCard
            key={index}
            heading={item.heading}
            paragraph={item.paragraph}
            img={item.img}
            bgColor={item.bgColor}
            translateX={`translateX(calc(-${currentIndex * 100}% - ${
              currentIndex * 1
            }rem))`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
