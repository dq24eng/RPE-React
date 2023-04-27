import './App.css';
import React, {useState, useEffect} from "react";
// Components
import NavBar from "./components/Nav/Nav";
// React Router DOM
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// PAGES
import Home from "./pages/Home/Home.js"
import Servicios from "./pages/Servicios/Servicios.js"
import Tienda from "./pages/Tienda/Tienda"
import ProductDetail from "./pages/Tienda/ProductDetail"
import Contact from "./pages/Contact/Contact.js"
// CONTEXT
import { ItemsCartProvider } from "./contexts/ItemsContext";

function App() {

  return (
      <ItemsCartProvider>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
            </Routes>
          </div>
        </Router>
      </ItemsCartProvider>
  );
}

export default App;



