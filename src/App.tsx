import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateOrderPage from "./order/presentation/page/CreateOrderPage";
import GetOrderPage from "./order/presentation/page/GetOrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-order" element={<CreateOrderPage />} />
        <Route path="/" element={<GetOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
