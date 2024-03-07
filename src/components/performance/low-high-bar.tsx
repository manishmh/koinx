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
      <div className="flex justify-between items-center gap-12 flex-col sm:flex-row">
        <div className="text-gray-600 flex-shrink-0 ">
          <div className="text-sm">{low}</div>
          <div className="font-medium mt-2">
            {lowPrice.toLocaleString("en-US")}
          </div>
        </div>
        <div className="h-1.5 rounded-full w-full relative performance-bar hidden sm:block">
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
        <div className="text-gray-600 flex-shrink-0">
          <div className="text-sm">{high}</div>
          <div className="font-medium mt-2">
            {highPrice.toLocaleString("en-US")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowHighBar;
