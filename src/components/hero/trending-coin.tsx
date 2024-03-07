import Image from "next/image";

const TrendingCoin = () => {
  return (
    <div className="bg-white max-w-sm rounded-xl px-4 py-6">
      <h1 className="font-semibold text-xl">Trending Coins (24h)</h1>
      <div className="flex flex-col gap-4 mt-4">
        <TrendingComponent
          img="/get-started.png"
          name="Bitcoin (BTC)"
          percentage={8.21}
        />
        <TrendingComponent
          img="/get-started.png"
          name="Etherium (ETH)"
          percentage={8}
        />
        <TrendingComponent
          img="/get-started.png"
          name="Dogecoin (DOGE)"
          percentage={7.21}
        />
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
        <div className="text-green-700">{percentage.toFixed(2)}%</div>
      </div>
    </div>
  );
}
