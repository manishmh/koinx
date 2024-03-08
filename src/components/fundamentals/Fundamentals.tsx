import { ReactNode } from "react";

const Fundamentals = ({ activeCategory, coinData }: { activeCategory: string, coinData: any }) => {
  const market_cap = coinData?.market_data?.market_cap?.usd;
  const volume = coinData?.market_data.total_volume?.usd;coinData?.market_data.total_volume?.usd
  const VolumeToMarketRatio = volume / market_cap;
  return (
    <div
      className={`bg-white rounded-b-lg font-semibold text-gray-700 px-4 py-12 flex flex-col justify-center
            ${activeCategory === "fundamentals" && "rounded-t-lg mt-4"} 
        `}
    >
      <h1 className="pb-4 text-xl">Fundamentals</h1>
      <div className="flex gap-10 justify-between mt-4 flex-col sm:flex-row">
        <div className="flex-1 max-w-md space-y-3">
          <Single title="Bitcoin Price">${coinData?.market_data.current_price.usd.toLocaleString("en-US")}</Single>
          <Single title="24H Low / 24H High">${(coinData?.market_data?.low_24h?.usd)?.toLocaleString("en-US")} / ${(coinData?.market_data?.high_24h?.usd)?.toLocaleString("en-US")}</Single>
          <Single title="7D Low / 7D High">NF / NF</Single>
          <Single title="Trading Volume">${Math.round(coinData?.market_data.total_volume?.usd).toLocaleString("en-US")}</Single>
          <Single title="Market Cap Rank"># { coinData?.market_cap_rank }</Single>
        </div>
        <div className="flex-1 max-w-md space-y-3">
          <Single title="Market Cap">${Math.round(coinData?.market_data?.market_cap?.usd).toLocaleString("en-US")}</Single>
          <Single title="Market Cap Dominance">NF</Single>
          <Single title="Volume / Market Cap">{( VolumeToMarketRatio ).toFixed(4)} </Single>
          <Single title="All time high">
            <div>
              NF
            </div>
          </Single>
          <Single title="All time low">NF</Single>
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
