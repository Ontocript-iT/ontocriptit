import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/home/Home";
import Header from "./components/shared/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
