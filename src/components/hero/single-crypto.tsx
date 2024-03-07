import CategorySwitcher from "../category-switcher";
import Performance from "../performance/performance";
import ChevronRight from "../svgs/chevron-right";
import CryptoRankHeader from "./crypto-rank-header";
import GetStarted from "./get-started";
import HeroCryptoPrice from "./hero-crypto-price";
import TradingViewWidget from "./trading-view-widget";
import TrendingCoin from "./trending-coin";

const SingleCryptoPage = ({}) => {
  return (
    <div>
      <div className="flex items-center py-2">
        <span className="text-[#6b7275]">Cryptocurrencies</span>
        <ChevronRight />
        <span className="capitalize">bitcoin</span>
      </div>
      <div className="flex justify-between gap-4">
        <div className="w-full flex flex-col gap-4">
          <div className="h-full bg-white p-4 rounded-lg">
            <CryptoRankHeader name="Bitcoin" rank={1} acr="BTC" />
            <HeroCryptoPrice usd={46953} inr={3942308} percent={3} />
            <div className="h-[500px] overflow-hidden">
              <TradingViewWidget />
            </div>
          </div>
          <CategorySwitcher />
        </div>
        <div className="space-y-4 flex-shrink-0 hidden lg:flex flex-col">
          <GetStarted />
          <TrendingCoin />
        </div>
      </div>
    </div>
  );
};

export default SingleCryptoPage;
