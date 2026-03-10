import { useEffect, useState } from "react";
import CrytoChart from "./CrytoChart";
import Crytograph from "./Crytograph";
import CrytoHeader from "./CrytoHeader";

const Dashboad = () => {
  const [coin, setCoin] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
      });
  }, []);

 

  return (
    <div className="content">
      <CrytoHeader />
      <div className="crytoContent">
        <CrytoChart coin={coin} setSelectedCoin={setSelectedCoin}/>

        <Crytograph selectedCoin={selectedCoin}/>
      </div>
    </div>
  );
};
export default Dashboad;
