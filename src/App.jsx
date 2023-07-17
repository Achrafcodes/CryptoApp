import Navbar from "./Components/Layouts/Navbar";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Hero from "./Components/landing/hero";
function App() {
  return (
    <Provider store={store}>
      <Navbar /> <Hero />
    </Provider>
  );
}

export default App;
