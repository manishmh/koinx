import HoldingCoinCard from "./holding-coin-card";

const AboutBitcoin = () => {
  return (
    <div className="bg-white rounded-lg mt-4 p-4">
      <h1 className="capitalize text-2xl font-semibold text-gray-800 ">
        About Bitcoin
      </h1>
      <div className="my-4">
        <h2 className="font-bold text-gray-800">What is Bitcoin?</h2>
        <p className="text-gray900 mt-2">
          Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading
          volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
          currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40%
          from its 7-day all-time low of $16,394.75. BTC has a circulating
          supply of 19.24 BTC and a max supply of 21 MBTC.
        </p>
        <hr className="mt-4" />
      </div>
      <div>
        <h1 className="font-bold text-gray-800 ">
          Lorem ipsum dolor sit amet
        </h1>
        <div className="space-y-6 py-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus
          </p>
          <p>
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </p>
          <p>
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus, Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat. in
            eget. Ullamcorper dui
          </p>
        </div>
        <hr />
        <div className="">
          <h1 className="text-2xl font-semibold pt-6">
            Already holding Bitcoin?
          </h1>
          <div className="flex gap-8 my-4">
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
