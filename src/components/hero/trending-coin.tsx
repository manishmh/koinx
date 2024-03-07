"use client";

import { CryptoDetails } from "@/api/CryptoDetails";
import Image from "next/image";
import { useEffect, useState } from "react";

const TrendingCoin = () => {
  const [trendingCoins, setTrendingCoins] = useState<any>(null);
  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/search/trending";
    CryptoDetails(url)
      .then((data) => {
        console.log("trendings: ", data);
        if (data?.coins && data.coins.length > 0) {
          const top10Coins = data.coins.slice(0, 10);
          setTrendingCoins(top10Coins);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-white max-w-sm rounded-xl px-4 py-6">
      <h1 className="font-semibold text-xl">Trending Coins (24h)</h1>
      <div className="flex flex-col gap-4 mt-4">
        {trendingCoins &&
          trendingCoins.map((coin: any, index: number) => {
            const priceChangePercentage =
              coin.item.price_change_percentage_24h?.usd;
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
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <Image
          src={img}
          alt={`trending-coin-image-${name}`}
          width={25}
          height={25}
          className="rounded-full"
        />
        <h1 className="font-medium">{name}</h1>
      </div>
      <div className="bg-green-100 px-4 py-1 rounded-md w-[80px] flex items-center justify-center">
        <div className="text-green-700">{percentage}%</div>
      </div>
    </div>
  );
}
