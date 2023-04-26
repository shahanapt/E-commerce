import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import NavbarComponent from "./components/Navbar";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/loginmodal" element={<Login />} />
          <Route path="/registermodal" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
