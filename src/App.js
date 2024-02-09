import Home from './components/pages/home/Home';
import Header from './components/shared/header/Header';
import Footer from "./components/shared/footer/Footer";

import { createBrowserRouter, Route,createRoutesFromElements } from 'react-router-dom';

import Process from "./components/pages/process/Process";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/process" element={<Process />} />
    </Route>
  )
);
function App() {

}

export default App;
