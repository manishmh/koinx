import LowHighBar from "./low-high-bar";

const Performance = ({ activeCategory, coinData }: { activeCategory: string, coinData: any}) => {
  return (
    <div className={`bg-white border md:border-none rounded-t-lg p-4 space-y-6 mt-4 border-b-0 shadow-sm ${activeCategory !== "overview" && "rounded-b-lg border-b md:border-b-0"}`}>
      <h1 className="text-xl font-semibold text-gray-800">Performance</h1>
      <LowHighBar
        low="Today's Low"
        high="Today's High"
        lowPrice={coinData?.market_data?.low_24h?.usd}
        highPrice={coinData?.market_data?.high_24h?.usd}
        livePrice={coinData?.market_data?.current_price?.usd}
      />
      <LowHighBar
        low="52W Low"
        high="52W High"
        lowPrice={0}
        highPrice={0}
      />
    </div>
  );
};

export default Performance;
