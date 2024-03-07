import { GoTriangleUp } from "react-icons/go";

const LowHighBar = ({
  low,
  high,
  lowPrice,
  highPrice,
  livePrice,
}: {
  low: string;
  high: string;
  lowPrice: number;
  highPrice: number;
  livePrice?: number;
}) => {
  const calculatePercentage = () => {
    if (livePrice !== undefined) {
      return Math.round(((livePrice - lowPrice) / (highPrice - lowPrice)) * 100);
    }
    return 0;
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-2 md:gap-12">
        <div className="text-gray-600 flex-shrink-0 w-[70px] md:w-24">
          <div className="text-xs md:text-sm">{low}</div>
          <div className="font-medium mt-2 text-sm md:text-base">
            {lowPrice.toLocaleString("en-US")}
          </div>
        </div>
        <div className="h-1.5 rounded-full w-full relative performance-bar ">
          {livePrice && (
            <div
              className={`flex flex-col items-center max-w-[100px] absolute`}
              style={{ left: `${calculatePercentage()}%`}}
            >
              <GoTriangleUp className="text-lg mt-[2px]" />
              <div className="text-gray-600">
                ${livePrice?.toLocaleString("en-US")}
              </div>
            </div>
          )}
        </div>
        <div className="text-gray-600 flex-shrink-0 w-[70px] md:w-24">
          <div className="text-xs md:text-sm">{high}</div>
          <div className="font-medium mt-2 text-sm md:text-base">
            {highPrice.toLocaleString("en-US")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowHighBar;
