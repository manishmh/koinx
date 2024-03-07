const AnalystEstimates = ({
  buy,
  hold,
  sell,
}: {
  buy: number;
  hold: number;
  sell: number;
}) => {
  const dominant = Math.max(buy, hold, sell);
  return (
    <div className="py-8">
      <h1 className="text-lg font-semibold text-gray-700">Analyst Estimates</h1>
      <div className="flex gap-12 mt-8 w-10/12">
        <div
          className={`h-28 w-28 rounded-full flex justify-center items-center text-3xl font-semibold flex-shrink-0
              ${
                (dominant === buy && "bg-green-100 text-green-700") ||
                (dominant === sell && "bg-red-100 text-red-700") ||
                (dominant === hold && "bg-gray-100 text-gray-700")
              }
            `}
        >
          {dominant}%
        </div>
        <div className="flex-1 flex flex-col justify-between py-2">
          <div className="text-gray-600 flex items-center gap-6">
            <div className="w-10">Buy</div>
            <div className="h-2 rounded-full bg-green-500" style={{ width: `${buy}%`}}></div>
            <div>{buy}%</div>
          </div>
          <div className="text-gray-600 flex items-center gap-6">
            <div className="w-10">Hold</div>
            <div className="h-2 rounded-full bg-gray-400" style={{ width: `${hold}%`}}></div>
            <div>{hold}%</div>
          </div>
          <div className="text-gray-600 flex items-center gap-6">
            <div className="w-10">Sell</div>
            <div className="h-2 rounded-full bg-red-500" style={{ width: `${sell}%`}}></div>
            <div>{sell}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystEstimates;
