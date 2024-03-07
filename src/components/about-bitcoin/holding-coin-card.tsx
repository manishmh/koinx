import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const HoldingCoinCard = ({ classname, heading }: {classname: string, heading: string }) => {
  return (
    <div className={`max-w-xs bg-gradient-to-br flex gap-8 p-3 rounded-md flex-1 md:max-w-md min-w-[200px] md:min-w-[350px] flex-col items-center md:flex-row ${classname}`}>
      <Image
        src="/profit.png"
        alt="holding-card"
        width={150}
        height={150}
        className="rounded-md w-full h-28 md:w-36 md:h-36 object-cover"
      />
      <div className="flex flex-col justify-center gap-4">
        <h1 className="font-bold text-white text-xl">{ heading }</h1>
        <CheckNow link="" />
      </div>
    </div>
  );
};

export default HoldingCoinCard;

function CheckNow({ link }: { link: string }) {
  return (
    <Link href={ link }>
      <button className="bg-white flex gap-2 items-center px-4 py-1 rounded-md font-medium">
        Check now
        <FaArrowRight />
      </button>
    </Link>
  );
}
