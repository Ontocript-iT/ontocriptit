import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home/Home';
import Header from './components/shared/header/Header';
import Footer from "./components/shared/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {
  return (
    <div className="App">
    <Header/>
      <Home/>
      <Footer/>
      <FontAwesomeIcon icon="fa-brands fa-square-youtube" style={{color: "#63E6BE",}} />
    
    </div>
  );
}

export default App;
