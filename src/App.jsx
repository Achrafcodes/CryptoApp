import Navbar from "./Components/Layouts/Navbar";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Navbar />{" "}
    </Provider>
  );
}

export default App;
