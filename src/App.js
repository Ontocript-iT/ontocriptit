import Home from "./components/pages/home/Home";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import Process from "./components/pages/process/Process";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactUs from "./components/pages/contactus/ContactUs";
import Service from "./components/pages/services/Service";
import Blog from "./components/pages/Blog/Blog";
import BlogData from "./components/pages/Blog/BlogData";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/process" element={<Process />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogData/:id" element={<BlogData />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
