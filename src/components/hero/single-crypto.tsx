'use client'

import { CryptoDetails } from "@/api/CryptoDetails";
import CategorySwitcher from "../category-switcher";
import ChevronRight from "../svgs/chevron-right";
import CryptoRankHeader from "./crypto-rank-header";
import GetStarted from "./get-started";
import HeroCryptoPrice from "./hero-crypto-price";
import TradingViewWidget from "./trading-view-widget";
import TrendingCoin from "./trending-coin";
import { useEffect, useState } from "react";

const SingleCryptoPage = ({ cryptoId }: { cryptoId: string }) => {
  const [coinData, setCoinData] = useState<any>(null)
  useEffect(() => {
    const url =
      `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;
    CryptoDetails(url)
      .then((data) => {
        console.log("Dataaa: ", data);
        setCoinData(data[cryptoId])
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex items-center py-2">
        <span className="text-[#6b7275]">Cryptocurrencies</span>
        <ChevronRight />
        <span className="capitalize">{cryptoId}</span>
      </div>
      <div className="flex justify-between gap-4 flex-col xl:flex-row">
        <div className="w-full flex flex-col gap-4">
          <div className="h-full bg-white p-4 rounded-lg">
            <CryptoRankHeader name={cryptoId} rank={1} acr={cryptoId.toUpperCase()}/>
            {coinData && coinData.usd && coinData.inr && ( 
              <HeroCryptoPrice
                usd={coinData.usd}
                inr={coinData.inr}
                percent={coinData.usd_24h_change}
              />
            )}
            <div className="h-[500px] overflow-hidden mt-4">
              <TradingViewWidget cryptoId={cryptoId}/>
            </div>
          </div>
          <CategorySwitcher coinData={coinData} cryptoId={cryptoId}/>
        </div>
        <div className="flex-shrink-0 flex flex-wrap gap-4 xl:flex-col">
          <GetStarted />
          <TrendingCoin />
        </div>
      </div>
    </div>
  );
};

export default SingleCryptoPage;
