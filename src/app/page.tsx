import { FIRST_100_COINS } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-col w-full max-w-screen-lg mx-auto">
        <h1 className="font-bol text-2xl my-4">Cryptocurrencies</h1>
        {FIRST_100_COINS.map((coin) => (
          <Link href={`/cryptocurrencies/${coin.toLowerCase()}`} key={coin}>
            <button className="px-4 py-2 bg-white flex-1 w-full  border hover:bg-blue-600 hover:text-white transition-colors duration-500">
              {coin}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
