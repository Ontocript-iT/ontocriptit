import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home/Home';
import Header from './components/shared/header/Header';
import Footer from "./components/shared/footer/Footer";




function App() {
  return (
    <div className="App">
    <Header/>
      <Home/>
      <Footer/>

    
    </div>
  );
}

export default App;
