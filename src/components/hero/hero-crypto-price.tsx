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
        <div className="bg-green-100 px-4 py-1 rounded-md flex items-center justify-center">
          <div className="text-green-700 text-sm">{percent.toFixed(2)}%</div>
        </div>
        <span className="text-sm text-gray-500">(24H)</span>
      </div>
      <div className="text-gray-800 text-sm">₹{inr.toLocaleString('en-IN')}</div>
    </div>
  );
};

export default HeroCryptoPrice;
