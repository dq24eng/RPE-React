import ProductList from '../../components/Products/ProductList';
import React, {useState, useEffect} from 'react';
import "./Tienda.css";
import {TextField, Button} from '@mui/material';
import getFetch from "../../components/Data/data";

const Tienda = ({cart, setCart}) => {

  const [allProducts, setAllProducts] = useState([]); //Array de productos
  const [total, setTotal] = useState(0);  //Total a pagar
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [idProducts, setIdProducts] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let arrayProducts = []

    products.map ((product) => (
      //arrayProducts.push(product.name)
      //console.log(product.name.toString().toLowerCase().includes(value.toLowerCase()))
      //product.name.toString().toLowerCase().includes(value.toLowerCase()) ? console.log("llegue") : null
      product.name.toString().toLowerCase().includes(value.toLowerCase()) ? arrayProducts.push(product.id) : null
    ))

    console.log(arrayProducts)
    //console.log(arrayProducts)
    /*for (let i = 0; i < arrayProducts.length; i++) {
      if (arrayProducts[i].toString().toLowerCase().includes(value.toLowerCase())){
        //arraySearchProd.push(arrayProducts[i])
        //idProducts.push(i+1)
        setIdProducts{[...idProducts,i+1]}
      }
    }*/
    setIdProducts(arrayProducts)
    //setIdProducts = [{arrayProducts}]

    console.log(idProducts)
    
  };

  useEffect (()=>{
    getFetch
    .then((resp) => setProducts(resp))
    .catch((err) => console.log(err))
  },[])

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



        <div >

        </div>
    </div>
  );
};

export default Tienda;


/*

        <div className='p-2 d-flex justify-content-center'>
          <ProductList allProducts = {allProducts} setAllProducts = {setAllProducts} total = {total}  
            setTotal={setTotal}  cart = {cart} setCart = {setCart} />
        </div>

*/