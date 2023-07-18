import Navbar from "./Components/Layouts/Navbar";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/landing/LandingComponent/Landing";
import Hero from "./Components/landing/hero";
import CryptoContainer from "./Components/landing/CryptoPrices/CryptoContainer";
function App() {
  return (
    <Provider store={store}>
      {" "}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="market" element={<CryptoContainer />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
