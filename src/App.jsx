import Navbar from "./Components/Layouts/Navbar";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const LazyMarket = lazy(() => import("./Components/landing/Market/Market"));
import Loading from "./Components/Loading/Loading";
import Hero from "./Components/landing/hero";
import Fotter from "./Components/Layouts/Fotter";
function App() {
  return (
    <Provider store={store}>
      {" "}
      <Router>
        <div className="flex flex-col overflow-x-hidden max-w-[100vw]">
          {" "}
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
          <Fotter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
