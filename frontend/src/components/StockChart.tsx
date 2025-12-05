import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const StockChart: React.FC = () => {
  const [labels, setLabels] = useState<string[]>([]);
  const [prices, setPrices] = useState<number[]>([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/stocks");

    setLabels(res.data.map((item: any) => item.symbol));
    setPrices(res.data.map((item: any) => item.price));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Stock Prices",
        data: prices,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h2>📉 Stock Price Chart</h2>
      <Line data={data} />
    </div>
  );
};

export default StockChart;
