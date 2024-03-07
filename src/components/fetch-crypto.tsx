const FetchCrypto = async () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=inr,usd&include_24hr_change=true`
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
  }, [cryptoId]);
};

export default FetchCrypto;
