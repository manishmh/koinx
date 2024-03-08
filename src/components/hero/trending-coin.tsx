"use client";

import Image from "next/image";

const TrendingCoin = ({ trendingCoins }: { trendingCoins: any }) => {

  return (
    <div className="bg-white max-w-sm rounded-xl px-4 py-6 w-full">
      <h1 className="font-semibold text-xl">Trending Coins (24h)</h1>
      <div className="flex flex-col gap-4 mt-4">
        {trendingCoins &&
          trendingCoins.map((coin: any, index: number) => {
            const priceChangePercentage = (coin.item.data.price_change_percentage_24h?.usd).toFixed(2);
            return (
              <TrendingComponent
                key={index}
                img={coin.item.small}
                name={`${coin.item.name} (${coin.item.symbol.toUpperCase()})`}
                percentage={
                  priceChangePercentage !== undefined
                    ? priceChangePercentage
                    : "N/A"
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default TrendingCoin;

function TrendingComponent({
  img,
  name,
  percentage,
}: {
  img: string;
  name: string;
  percentage: number;
}) {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex gap-2">
        <div className="flex-shrink-0">
          <Image
            src={img}
            alt={`trending-coin-image-${name}`}
            width={25}
            height={25}
            className="rounded-full"
          />
        </div>
        <h1 className="font-medium text-sm md:textbase">{name}</h1>
      </div>
      <div className="bg-green-100 px-4 py-1 rounded-md w-[80px] flex items-center justify-center">
        <div className="text-green-700 text-xs md:text-base">{percentage}%</div>
      </div>
    </div>
  );
}
