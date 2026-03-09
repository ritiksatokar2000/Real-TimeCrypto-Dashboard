import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect, useState } from "react";
const Crytograph = ({ selectedCoin }) => {
  const [chartData, setChartData] = useState({ dates: [], prices: [] });
  console.log(selectedCoin);
  useEffect(() => {
    if (!selectedCoin) return;
    fetch(
      `https://api.coingecko.com/api/v3/coins/${selectedCoin.id}/market_chart?vs_currency=usd&days=7`,
    )
      .then((res) => res.json())
      .then((data) => {
        const prices = data.prices.map((item) => item[1]);
        const dates = data.prices.map((item) =>
          new Date(item[0]).toLocaleDateString(),
        );
        setChartData({ prices, dates });
      });
  }, [selectedCoin]);

  return (
    <div className="crytoGraph">
      <h3>{selectedCoin?.coin && `${selectedCoin.coin} - 7 Day Price`}  </h3>
      <LineChart
        xAxis={[{ data: chartData.dates, scaleType: "point" }]}
        series={[
          {
            data: chartData.prices,
            showMark: false, // removes circles
            curve: "monotoneX", // smooth line
          },
        ]}
        grid={{vertical:true,horizontal:true}}
        slotProps={{
          tooltip:{trigger:"axis"},
        }}
        height={300}
      />
    </div>
  );
};
export default Crytograph;
