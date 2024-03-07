import Image from "next/image";

function CryptoRankHeader({
  name,
  rank,
  acr,
}: {
  name: string;
  rank: number;
  acr: string;
}) {
  return (
    <div className="flex items-center gap-8">
      <div className="flex gap-2">
        <Image
          src="/get-started.png"
          alt={`cyrpto-hero-heading-image`}
          width={25}
          height={25}
          className="rounded-full"
        />
        <h1 className="font-medium">
          {name} <span className="text-xs text-gray-700">{acr}</span>
        </h1>
      </div>
      <div className="bg-gray-500 px-4 py-1 rounded-md flex items-center justify-center">
        <div className="text-white text-xs">Rank #{rank}</div>
      </div>
    </div>
  );
}

export default CryptoRankHeader;
