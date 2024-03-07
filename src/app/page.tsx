import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/cryptocurrencies/bitcoin">
        <button className="px-4 py-2 m-8 bg-blue-700 rounded-md text-white">Track cryptocurrencies</button>
      </Link>
      <Link href="/cryptocurrencies/bitcoin">
        <button className="px-4 py-2 m-8 bg-blue-700 rounded-md text-white">Bitcoin</button>
      </Link>
      <Link href="/cryptocurrencies/ethereum">
        <button className="px-4 py-2 m-8 bg-blue-700 rounded-md text-white">Ethereum</button>
      </Link>
      <Link href="/cryptocurrencies/dogecoin">
        <button className="px-4 py-2 m-8 bg-blue-700 rounded-md text-white">Dogecoin</button>
      </Link>
    </div>
  );
}
