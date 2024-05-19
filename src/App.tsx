import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
