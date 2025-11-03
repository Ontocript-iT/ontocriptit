// import Home from "./components/pages/home/Home";
// import Header from "./components/shared/header/Header";
// import {
//   RouterProvider,
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import ContactUs from "./components/pages/contactus/ContactUs";
// import Service from "./components/pages/services/Service";
// import Blog from "./components/pages/Blog/Blog";
// import AboutUs from "./components/pages/aboutUs/AboutUs";
// import Technology from "./components/pages/Technology/Technology";
// import PrivacyPolicy from "./components/pages/Privacy-Policy/PrivacyPolicy";
// import BlogData from "./components/pages/Blog/BlogData";
// import Portfolio from "./components/pages/portfolio/Portfolio";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Header />}>
//       <Route index element={<Home />} />
//       {/* <Route path="/process" element={<Process />} /> */}
//       <Route path="/contact" element={<ContactUs />} />
//       <Route path="/services" element={<Service />} />
//       <Route path="/blog" element={<Blog />} />
//       <Route path="/blogData/:id" element={<BlogData />} />
//       <Route path="/aboutus" element={<AboutUs />} />
//       <Route path="/technology" element={<Technology />} />
//       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//       <Route path="/portfolio" element={<Portfolio />} />
//     </Route>
//   ),
//   // { basename: "/ontocriptit" }
// );
// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;


import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Header from "./components/shared/header/Header";
import ContactUs from "./components/pages/contactus/ContactUs";
import Service from "./components/pages/services/Service";
import Blog from "./components/pages/Blog/Blog";
import AboutUs from "./components/pages/aboutUs/AboutUs";
import Technology from "./components/pages/Technology/Technology";
import PrivacyPolicy from "./components/pages/Privacy-Policy/PrivacyPolicy";
import BlogData from "./components/pages/Blog/BlogData";
import Portfolio from "./components/pages/portfolio/Portfolio";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogData/:id" element={<BlogData />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
