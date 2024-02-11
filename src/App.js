import Home from './components/pages/home/Home';
import Header from './components/shared/header/Header';
import Footer from "./components/shared/footer/Footer";
import Process from "./components/pages/process/Process";

import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/process" element={<Process />} />
    </Route>
  )
);
function App() {

return <RouterProvider router={router}/>

}

export default App;
