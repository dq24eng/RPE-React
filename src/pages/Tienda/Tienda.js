import ProductList from '../../components/Products/ProductList';
import React, {useState, useEffect, useContext} from 'react';
import "./Tienda.css";
import {TextField, Button} from '@mui/material';
import { ItemsCart } from "../../contexts/ItemsContext"
// FIREBASE 
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

//import NavBar from '../../components/Nav/Nav';

const Tienda = () => {

  const [value, setValue] = useState("");
  const [idProducts, setIdProducts] = useState([]);
  const [clickOnSubmit, setClickOnSubmit] = useState (false);
  const [productsFilter, setProductsFilter] = useState ([]);
  const { cart, setCart, allProductsCart } = useContext(ItemsCart);
  const q = query(collection(db, "products"));
  const [products, setProducts] = useState([]);

  const [cartProducts, setCartProducts] = useState([]); //Productos que se van añadiendo al carrito
  const [total, setTotal] = useState(0);  //Total a pagar
  const [countProducts, setCountProducts] = useState(0); //Contador de productos  
  let quantity = []

  useEffect(() => {
    const getProductsRP = async() => {
        const querySnapshot = await getDocs(q);
        const prods = [];
        querySnapshot.forEach((doc) => {
            prods.push({...doc.data(), id: doc.id})
        });
        setProducts(prods);
    };
    getProductsRP();
  }, []);

  localStorage.setItem('products', JSON.stringify(products));
  products.map ((prod) =>
    quantity.push(prod.id)
  )  
  localStorage.setItem('quantity', JSON.stringify(quantity))

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let arrayProducts = [];
    let newArrayProducts = [];
    setClickOnSubmit(true)
    products.map ((product) => (
      product.name.toString().toLowerCase().includes(value.toLowerCase()) ? arrayProducts.push(product.id) : null
    ))

    setIdProducts(arrayProducts)

    for (let i = 0; i < products.length; i++) {
      for (let j=  0; j < arrayProducts.length; j++) {
        if (products[i].id == arrayProducts[j]) {
          newArrayProducts.push(products[i]) 
        }
      }
    }

    setValue("")
    setProductsFilter(newArrayProducts)

  };

  return (
    <div>

        <h1>Nuestra Tienda</h1>

        <form className="Form" onSubmit={onSubmit} >
          <TextField
            placeholder="Buscar producto"
            className="Textfield"
            variant="outlined"
            onChange={onChange}
            value={value}
          />
          <Button variant="contained" type="submit" > Buscar </Button>
        </form>

        <div className='p-2 d-flex justify-content-center'>
          <ProductList products = {products} setProducts = {setProducts} productsFilter = {productsFilter} 
            clickOnSubmit = {clickOnSubmit} />
        </div>

    </div>
  );
};

export default Tienda;
