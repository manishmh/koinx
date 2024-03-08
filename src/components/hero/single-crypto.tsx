"use client";

import { useEffect, useState } from "react";
import CategorySwitcher from "../category-switcher";
import ChevronRight from "../svgs/chevron-right";
import CryptoRankHeader from "./crypto-rank-header";
import GetStarted from "./get-started";
import HeroCryptoPrice from "./hero-crypto-price";
import TradingViewWidget from "./trading-view-widget";
import TrendingCoin from "./trending-coin";

const SingleCryptoPage = ({ cryptoId }: { cryptoId: string }) => {
  const [coinData, setCoinData] = useState<any>(null);
  const [trendingCoins, setTrendingCoins] = useState<any>(null);

  console.log("coindata", coinData);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=inr%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;
      const trendingUrl = "https://api.coingecko.com/api/v3/search/trending";
      const coinInformationUrl = `https://api.coingecko.com/api/v3/coins/${cryptoId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;

      try {
        const trendingResponse = await fetch(trendingUrl);
        const coinInformationResponse = await fetch(coinInformationUrl);

        const coinInformationData = await coinInformationResponse.json();
        const trendingData = await trendingResponse.json();

        setCoinData(coinInformationData);
        if (trendingData?.coins && trendingData.coins.length > 0) {
          const top10Coins = trendingData.coins.slice(0, 10);
          setTrendingCoins(top10Coins);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cryptoId]);

  return (
    <>
      <div className="flex items-center py-2">
        <span className="text-[#6b7275]">Cryptocurrencies</span>
        <ChevronRight />
        <span className="capitalize">{cryptoId}</span>
      </div>
      <div className="flex justify-between gap-4 flex-col xl:flex-row">
        <div className="w-full flex flex-col gap-4">
          <div className="h-full bg-white p-4 rounded-lg">
            <CryptoRankHeader coinData={coinData} />
            <HeroCryptoPrice
              usd={coinData?.market_data?.current_price?.usd}
              inr={coinData?.market_data?.current_price?.inr}
              percent={coinData?.market_data?.price_change_percentage_24h}
            />
            <div className="h-[500px] overflow-hidden mt-4">
              <TradingViewWidget symbol={coinData?.symbol} />
            </div>
          </div>
          <CategorySwitcher coinData={coinData} />
        </div>
        <div className="flex-shrink-0 flex flex-wrap gap-4 xl:flex-col">
          <GetStarted />
          <TrendingCoin trendingCoins={trendingCoins} />
        </div>
      </div>
    </>
  );
};

export default SingleCryptoPage;
