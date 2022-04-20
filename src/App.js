import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
