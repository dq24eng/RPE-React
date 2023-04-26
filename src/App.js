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
// FIREBASE 
import { db } from './firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

function App() {

  const [total, setTotal] = useState(0);  //Total a pagar
  const q = query(collection(db, "products"));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsRP = async() => {
        const querySnapshot = await getDocs(q);
        const prods = [];
        querySnapshot.forEach((doc) => {
            prods.push({...doc.data()})
        });
        setProducts(prods);
    };
    getProductsRP();
  }, []);

  return (
      <ItemsCartProvider>
        <Router>
          <div>
            <NavBar products = {products} setProducts = {setProducts} total = {total}  setTotal={setTotal} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/tienda" element={<Tienda products = {products} setProducts = {setProducts} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:id" element={<ProductDetail products = {products} setProducts = {setProducts} />} />
            </Routes>
          </div>
        </Router>
      </ItemsCartProvider>
  );
}

export default App;

//<NavBar allProducts = {allProducts} setAllProducts = {setAllProducts} total = {total}  setTotal={setTotal}  cart = {cart} setCart = {setCart} />



