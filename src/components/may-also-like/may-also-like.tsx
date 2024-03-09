import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AlsoLikeCard from "./also-like-card";

const MayAlsoLike = ({ trendingCoins }: { trendingCoins: any }) => {
  const [currentIndexC1, setCurrentIndexC1] = useState(0);
  const [currentIndexC2, setCurrentIndexC2] = useState(0);

  const handleNext = (carousel: string) => {
    carousel === "c1"
      ? setCurrentIndexC1((prevIndex) => (prevIndex + 2) % trendingCoins.length)
      : setCurrentIndexC2(
          (prevIndex) => (prevIndex + 2) % trendingCoins.length
        );
  };

  const handlePrev = (carousel: string) => {
    carousel === "c1"
      ? setCurrentIndexC1(
          (prevIndex) =>
            (prevIndex - 2 + trendingCoins.length) % trendingCoins.length
        )
      : setCurrentIndexC2(
          (prevIndex) =>
            (prevIndex - 2 + trendingCoins.length) % trendingCoins.length
        );
  };

  return (
    <div className="bg-white mt-8 px-4 md:px-12 mx-auto">
      <h1 className="capitalize font-semibold text-xl md:text-2xl text-gray-800 pt-4">
        You may also like
      </h1>

      {/* first caoursel */}
      <div className="relative">
        <div className="flex overflow-x-scroll scroll-bar overflow-hidden gap-4 py-4">
          <div
            className="hidden md:flex bg-border border-gray-100 w-10 h-10 rounded-full flex-shrink-0 justify-center items-center absolute -left-4 top-1/2 -translate-y-1/2 shadow-md cursor-pointer z-20"
            onClick={() => handlePrev("c1")}
          >
            <FaChevronLeft className="text-gray-600"/>
          </div>
          <div
            className="hidden md:flex bg-white border border-gray-100 w-10 h-10 rounded-full flex-shrink-0 justify-center items-center absolute -right-4 top-1/2 -translate-y-1/2 shadow-md cursor-pointer z-20"
            onClick={() => handleNext("c1")}
          >
            <FaChevronRight className="text-gray-600"/>
          </div>
          {trendingCoins?.map((coin: any) => (
            <AlsoLikeCard coin={coin} key={coin?.item?.id} translateX={`translateX(calc(-${currentIndexC1 * 100}% - ${currentIndexC1 * 1}rem))`} />
          ))}
        </div>
      </div>

      {/* second carousel */}
      <div className="relative">
          <div
            className="hidden md:flex bg-white border border-gray-100 w-10 h-10 rounded-full flex-shrink-0 justify-center items-center absolute -left-4 top-1/2 -translate-y-1/2 shadow-md cursor-pointer z-20"
            onClick={() => handlePrev("c2")}
          >
            <FaChevronLeft className="text-gray-600"/>
          </div>
          <div
            className="hidden md:flex bg-white border border-gray-100 w-10 h-10 rounded-full flex-shrink-0 justify-center items-center absolute -right-4 top-1/2 -translate-y-1/2 shadow-md cursor-pointer z-20"
            onClick={() => handleNext("c2")}
          >
            <FaChevronRight className="text-gray-600"/>
          </div>
        <div className="flex overflow-x-scroll scroll-bar overflow-hidden gap-4 py-4">
          {trendingCoins?.reverse().map((coin: any) => (
            <AlsoLikeCard coin={coin} key={coin?.item?.id} translateX={`translateX(calc(-${currentIndexC2 * 100}% - ${currentIndexC2 * 1}rem))`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MayAlsoLike;
