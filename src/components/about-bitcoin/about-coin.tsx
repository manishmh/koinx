import HoldingCoinCard from "./holding-coin-card";
import { formatLargeNumber } from "../formart-large-number";
import { divideParagraph } from "../divide-paragraph";

const AboutBitcoin = ({ coinData }: {coinData: any }) => {
  const details = coinData?.description?.en;
  const [part1, part2, part3] = divideParagraph(details);


  return (
    <div className="bg-white rounded-lg mt-4 p-4 border shadow-sm md:border-none">
      <h1 className="capitalize text-2xl font-semibold text-gray-800 ">
        About { coinData?.name } 
      </h1>
      <div className="my-4">
        <h2 className="font-bold text-gray-800">What is { coinData?.name }?</h2>
        <p className="text-gray900 mt-2">
          { coinData?.name }&apos;s price today is US ${coinData?.usd}, with a 24-hour trading
          volume of ${ formatLargeNumber(coinData?.usd_market_cap) }. { coinData?.name } is {coinData?.market_data?.price_change_percentage_24h}% in the last 24 hours. It is
          currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40%
          from its 7-day all-time low of $16,394.75. { coinData?.name } has a circulating
          supply of 19.24 BTC and a max supply of 21 MBTC.
        </p>
        <hr className="mt-4" />
      </div>
      <div>
        <h1 className="font-bold text-gray-800 ">
          Description
        </h1>
        <div className="space-y-6 py-4">
          <p dangerouslySetInnerHTML={{ __html: part1 }}>
          </p>
          <p dangerouslySetInnerHTML={{ __html: part2 }}>
          </p>
          <p dangerouslySetInnerHTML={{ __html: part3 }}>
          </p>
        </div>
        <hr />
        <div className="">
          <h1 className="text-2xl font-semibold pt-6">
            Already holding { coinData?.name }?
          </h1>
          <div className="flex gap-8 my-4 flex-wrap">
            <HoldingCoinCard classname="from-[#75EBA4] to-[#1667AD]" heading="Calculate your Profits"/>
            <HoldingCoinCard classname="from-[#FE9563] to-[#F24039]" heading="Calculate your tax liability"/>
          </div>
          <hr />
          <p className="mt-4">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus, Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat. in
            eget. Ullamcorper dui
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBitcoin;
