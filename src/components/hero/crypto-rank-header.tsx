import Image from "next/image";

function CryptoRankHeader({
  coinData,
}: {
  coinData: any,
}) {
  const symbol = coinData?.symbol;
  return (
    <div className="flex items-center gap-8">
      <div className="flex gap-2">
        <Image
          src={coinData?.image?.small}
          alt={`cyrpto-hero-heading-image${symbol}`}
          width={25}
          height={25}
          className="rounded-full"
        />
        <h1 className="font-medium">
          {coinData?.name} <span className="text-xs text-gray-700 uppercase">{symbol}</span>
        </h1>
      </div>
      <div className="bg-gray-500 px-4 py-1 rounded-md flex items-center justify-center">
        <div className="text-white text-xs">Rank #{coinData?.market_cap_rank}</div>
      </div>
    </div>
  );
}

export default CryptoRankHeader;
