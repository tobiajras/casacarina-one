import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { AboutUs } from "./pages/aboutUs/AboutUs";
import { ContactScreen } from "./pages/contact/ContactScreen";
import { HomeScreen } from "./pages/home/HomeScreen";
import { ProductsScreen } from "./pages/products/ProductsScreen";
import "./styles/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="productos" element={<ProductsScreen />} />
      <Route path="nosotros" element={<AboutUs />} />
      <Route path="contacto" element={<ContactScreen />} />
    </Routes>
  </BrowserRouter>
);
