import React, { useEffect, useState } from "react";
import axios from "axios";

interface Stock {
  _id: string;
  symbol: string;
  price: number;
  date: string;
}

const StockList: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/api/stocks");
    setStocks(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Stock Entries</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((s) => (
            <tr key={s._id}>
              <td>{s.symbol}</td>
              <td>${s.price}</td>
              <td>{new Date(s.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
