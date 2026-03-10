import { useEffect, useState } from "react";

const CrytoHeader = () => {
  //data.data.market_cap_percentage.btc)
  const [globalData, setGlobalData] = useState(null);

  function formatNumber(num) {
  if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
  if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
  return num;
}


  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/global")
      .then((res) => res.json())
      .then((data) => {
        setGlobalData(data.data);
      });
  }, []);

  if(!globalData){
    return <p>Loading...</p>
  }


  return (
    <div className="crytoHeader">
      <div class="row ">
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Total Market Cap</h5>
              <h2 class="card-text"> ${formatNumber(globalData.total_market_cap.usd)}</h2>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">24h Volume</h5>
              <h2 class="card-text">${formatNumber(globalData.total_volume.usd)}</h2>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">BTC Dominance</h5>
              <h2 class="card-text"> {globalData.market_cap_percentage.btc.toFixed(2)}%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CrytoHeader;
