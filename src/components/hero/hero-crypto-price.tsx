const HeroCryptoPrice = ({
  usd,
  inr,
  percent,
}: {
  usd: number;
  inr: number;
  percent: number;
}) => {
  return (
    <div className="pt-4">
      <div className="flex gap-2 items-center">
        <div className="text-2xl font-semibold">${usd.toLocaleString('en-US')}</div>
        <div className={`px-4 py-1 rounded-md flex items-center justify-center ${percent < 0 ? "bg-red-100" : "bg-green-100"}`}>
          <div className={` text-sm ${percent < 0 ? "text-red-600" : "text-green-700"}`}>{percent.toFixed(2)}%</div>
        </div>
        <span className="text-sm text-gray-500">(24H)</span>
      </div>
      <div className="text-gray-800 text-sm">₹{inr.toLocaleString('en-IN')}</div>
    </div>
  );
};

export default HeroCryptoPrice;
