import React, { useState } from "react";
import axios from "axios";

const AddStockForm: React.FC = () => {
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/stocks/add", {
      symbol,
      price: Number(price),
    });

    alert("Stock Added!");
    setSymbol("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Stock</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Stock Symbol (AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
        />{" "}
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Stock</button>
      </form>
    </div>
  );
};

export default AddStockForm;
