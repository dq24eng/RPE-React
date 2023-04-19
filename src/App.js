import './App.css';
import React, {useState} from "react";
// Components
import NavBar from "./components/Nav/Nav";
//import ProductList from './components/Products/ProductList';
// MaterialUI
//import { unstable_ClassNameGenerator } from '@mui/material';

// React Router DOM
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// PAGES
import Home from "./pages/Home/Home.js"
import Servicios from "./pages/Servicios/Servicios.js"
import Tienda from "./pages/Tienda/Tienda"
import ProductDetail from "./pages/Tienda/ProductDetail"
import Contact from "./pages/Contact/Contact.js"

function App() {

  const [allProducts, setAllProducts] = useState([]); //Array de productos
  const [total, setTotal] = useState(0);  //Total a pagar
  const [cart, setCart] = useState(0);  //Cantidad de productos en carrito

  return (
    <>
      <Router>
        <div>
          <NavBar allProducts = {allProducts} setAllProducts = {setAllProducts} total = {total}  
            setTotal={setTotal}  cart = {cart} setCart = {setCart} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/tienda" element={<Tienda cart = {cart} setCart = {setCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
