import SingleCryptoPage from "@/components/hero/single-crypto";

const cryptoData = ["etherium", "bitcoin", "dogecoin", "shiba"];

const Crypto = async ({ params }: { params: any }) => {
  console.log('cryptodataaaa', cryptoData);

  const cryptoId = params.cryptoId;
  const crypto = cryptoData.find((crypto: any) => crypto === cryptoId);

  if (!crypto) {
    return <div>Crypto not found</div>;
  }

  return (
    <div className="bg-[#EFF2F5]">
        <div className="max-w-[1980px] mx-auto px-6 md:px-8 pb-4">
            <SingleCryptoPage />
        </div>
    </div>
  );
};

export default Crypto;
