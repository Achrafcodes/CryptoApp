import Navbar from "./Components/Layouts/Navbar";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const LazyMarket = lazy(() => import("./Components/landing/Market/Market"));
import Loading from "./Components/Loading/Loading";
import Hero from "./Components/landing/hero";
function App() {
  return (
    <Provider store={store}>
      {" "}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="market"
            element={
              <Suspense fallback={<Loading />}>
                <LazyMarket />{" "}
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
