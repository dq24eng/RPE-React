import ProductList from '../../components/Products/ProductList';
import React, {useState} from "react";

const Tienda = ({cart, setCart}) => {

  const [allProducts, setAllProducts] = useState([]); //Array de productos
  const [total, setTotal] = useState(0);  //Total a pagar

  return (
    <div>
        <h1>Tienda</h1>
        <div className='p-2 d-flex justify-content-center'>
          <ProductList allProducts = {allProducts} setAllProducts = {setAllProducts} total = {total}  
            setTotal={setTotal}  cart = {cart} setCart = {setCart} />
        </div>
    </div>
  );
};

export default Tienda;