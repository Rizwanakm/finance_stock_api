import React from "react";
import AddStockForm from "./components/AddStockForm";
import StockList from "./components/StockList";
import StockChart from "./components/StockChart";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📈 Finance / Stock Market Dashboard</h1>

      <AddStockForm />
      <hr />
      <StockList />
      <hr />
      <StockChart />
    </div>
  );
}

export default App;
