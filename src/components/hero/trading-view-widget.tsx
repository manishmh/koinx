"use client";

import React, { memo, useEffect, useRef } from "react";

function TradingViewWidget({ cryptoId }: { cryptoId: string }) {
  const container = useRef<HTMLDivElement>(null);
  let cryptoSymbol = "";
  
  const cryptoData: { [key: string]: string } = {
    bitcoin: "BTC",
    ethereum: "ETH",
    dogecoin: "DOGE",
  };
  
  if (cryptoData.hasOwnProperty(cryptoId)) {
    cryptoSymbol = cryptoData[cryptoId];
  }
  
  useEffect(() => {
    if (container.current) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:${cryptoSymbol}USD",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default memo(TradingViewWidget);
