

import Header from "./components/shared/header/Header";
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
