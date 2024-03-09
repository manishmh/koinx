'use client'

import SingleCryptoPage from "@/components/hero/single-crypto";

const cryptoData = ["ethereum", "bitcoin", "dogecoin", "shiba", "btc"];

const Crypto = ({ params }: { params: any }) => {
  const cryptoId = params.cryptoId;
  const crypto = cryptoData.find((crypto: any) => crypto === cryptoId);

  if (!crypto) {
    return <div>Crypto not found</div>;
  }

  return (
    <div className="bg-[#EFF2F5] ">
      <div className="max-w-[1980px] mx-auto pb-4 ">
        <SingleCryptoPage cryptoId={cryptoId} />
      </div>
    </div>
  );
};

export default Crypto;
