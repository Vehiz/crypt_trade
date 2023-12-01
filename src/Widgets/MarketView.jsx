import { useEffect } from "react";

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
        "colorTheme": "light",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "height": "700",
        "borderRadius": "12px",
      // ... (other configuration options)
    });

    document
      .getElementsByClassName("tradingview-widget-container__widget")[0]
      .appendChild(script);

    return () => {
      document.getElementsByClassName(
        "tradingview-widget-container__widget"
      )[0].innerHTML = "";
    };
  }, []);

  return (
    <section className="">
      <div className=" tradingview-widget-container">
        <div className="mx-[42px] mb-[30px] rounded-2xl tradingview-widget-container__widget"></div> 
      </div>
    </section>
  );
};

export default TradingViewWidget;
