import { ReactNode } from "react";

const Fundamentals = ({ activeCategory, coinData }: { activeCategory: string, coinData: any }) => {
  return (
    <div
      className={`bg-white rounded-b-lg font-semibold text-gray-700 px-4 py-12 flex flex-col justify-center
            ${activeCategory === "fundamentals" && "rounded-t-lg mt-4"} 
        `}
    >
      <h1 className="pb-4 text-xl">Fundamentals</h1>
      <div className="flex gap-10 justify-between mt-4 flex-col sm:flex-row">
        <div className="flex-1 max-w-md space-y-3">
          <Single title="Bitcoin Price">${coinData && coinData.usd.toLocaleString("en-US")}</Single>
          <Single title="24H Low / 24H High">$16,230.33 / $16,900.44</Single>
          <Single title="7D Low / 7D High">$16,230.33 / $16,900.44</Single>
          <Single title="Trading Volume">${coinData && Math.round(coinData.usd_24h_vol).toLocaleString("en-US")}</Single>
          <Single title="Market Cap Rank"># 1</Single>
        </div>
        <div className="flex-1 max-w-md space-y-3">
          <Single title="Market Cap">${coinData && Math.round(coinData.usd_market_cap).toLocaleString("en-US")}</Single>
          <Single title="Market Cap Dominance">38.83%</Single>
          <Single title="Volume / Market Cap">{coinData && (coinData.usd_24h_vol / coinData.usd_market_cap).toFixed(4)} </Single>
          <Single title="All time high">
            <div>
              928389.3
            </div>
          </Single>
          <Single title="All time low">$16,230.33</Single>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;

function Single({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex justify-between border-b-2 pb-4 gap-4">
      <div className="capitalize text-gray-500 font-medium text-sm">
        {title}
      </div>
      <div className="text-sm text-end">{children}</div>
    </div>
  );
}
