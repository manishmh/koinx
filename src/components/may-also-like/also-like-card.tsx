import Image from "next/image";

const AlsoLikeCard = ({  coin, translateX }: { coin: any, translateX: string }) => {
    const percent = 3;
  return (
    <div className="border rounded-lg p-2 md:p-4 flex-shrink-0 max-w-sm transition-all duration-500" style={{ transform: translateX }}>
      <div className="flex items-center gap-2">
        <div>
          <Image
            src={coin?.item?.small}
            alt={`you-may-also-like-coin-logo${coin?.item?.id}`}
            width={30}
            height={30}
            className="rounded-full flex-shrink-0 w-6 h-6 md:w-8 md:h-8"
          />
        </div>
        <div className="uppercase md:text-lg font-medium">{coin?.item?.symbol}</div>
        <div
          className={`px-2 py-1 rounded-md flex items-center justify-center ${
            percent < 0 ? "bg-red-100" : "bg-green-100"
          }`}
        >
          <div
            className={` text-sm ${
              percent < 0 ? "text-red-600" : "text-green-700"
            }`}
          >
            {}
          </div>
        </div>
      </div>
      <div className="text-lg md:text-2xl font-semibold text-gray-700 mt-1 md:mt-3 pb-1">
        ${(319.34).toLocaleString("en-US")}
      </div>
      <div className="md:pl-6 pl-2 md:pr-8 pr-4">
        <Image 
            src={coin?.item?.data?.sparkline}
            alt={`${coin?.item?.id}-graph`}
            width={200}
            height={70}
            className="w-32 md:w-[200px] h-auto"
        />
      </div>
    </div>
  );
};

export default AlsoLikeCard;
