import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/cryptocurrencies/bitcoin">
        <button className="px-4 py-2 m-8 bg-blue-700 rounded-md text-white">Track cryptocurrencies</button>
      </Link>
    </div>
  );
}
