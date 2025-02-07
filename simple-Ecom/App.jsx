// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Blogs from "./pages/blogs/Blogs";
// import BlogDetail from "./pages/blogs/BlogDetail";
// import NotFound from "./pages/NotFound";
// import Navbar from "./components/Navbar";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/blogs/:id" element={<BlogDetail />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/products/Products";
import Electronics from "./pages/products/Electronics";
import Fashion from "./pages/products/Fashion";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
