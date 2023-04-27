import ProductList from '../../components/Products/ProductList';
import React, {useState, useEffect, useContext} from 'react';
import "./Tienda.css";
import {TextField, Button} from '@mui/material';
import { ItemsCart } from "../../contexts/ItemsContext"
// FIREBASE 
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";

import NavBar from '../../components/Nav/Nav';

const Tienda = () => {

  const [value, setValue] = useState("");
  const [idProducts, setIdProducts] = useState([]);
  const [clickOnSubmit, setClickOnSubmit] = useState (false);
  const [productsFilter, setProductsFilter] = useState ([]);
  const { cart, setCart } = useContext(ItemsCart);
  const q = query(collection(db, "products"));
  const [products, setProducts] = useState([]);

  const [cartProducts, setCartProducts] = useState([]); //Productos que se van añadiendo al carrito
  const [total, setTotal] = useState(0);  //Total a pagar
  const [countProducts, setCountProducts] = useState(0); //Contador de productos  

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



/*

productsFilter.map ((product) => (
                <div className='product-cart'>
                    <Link to={`/detail/${product.id}`} className='link-class'>
                        <div className='item' key={product.id}>
                            <div className='imageClass'> 
                                <img src={product.url} alt={product.name} height="285" width="200" /> 
                            </div>
                            <div className='info-product'> 
                                <p className='title'>{product.name}</p>
                                <p className='price'>${product.price} </p>
                            </div>
                        </div>
                    </Link>
                    <div className='product-button'> 
                        <Button variant="dark" onClick={añadirCarrito} className='btn align-self-center'>Añadir al carrito</Button>
                    </div>
                </div>
              ))

*/




/*

{
          clickOnSubmit ? 
            <div className='p-2 d-flex justify-content-center'>
            <ProductList allProducts = {allProducts} setAllProducts = {setAllProducts} total = {total}  
              setTotal={setTotal}  cart = {cart} setCart = {setCart} />
            </div>  
            :
            products.map ((product) => (
              <div className='product-cart'>
                  <Link to={`/detail/${product.id}`} className='link-class'>
                      <div className='item' key={product.id}>
                          <div className='imageClass'> 
                              <img src={product.url} alt={product.name} height="285" width="200" /> 
                          </div>
                          <div className='info-product'> 
                              <p className='title'>{product.name}</p>
                              <p className='price'>${product.price} </p>
                          </div>
                      </div>
                  </Link>
                  <div className='product-button'> 
                      <Button variant="dark" onClick={añadirCarrito} className='btn align-self-center'>Añadir al carrito</Button>
                  </div>
              </div>
          ))

        }

*/

/*

        <div className='p-2 d-flex justify-content-center'>
          <ProductList allProducts = {allProducts} setAllProducts = {setAllProducts} total = {total}  
            setTotal={setTotal}  cart = {cart} setCart = {setCart} />
        </div>

*/


/*

clickOnSubmit ? 
            ((productsFilter.length != 0) ?
              (<div className='p-2 d-flex justify-content-center'>
                <ProductList products = {products} setProducts = {setProducts} productsFilter = {productsFilter} 
                clickOnSubmit = {true} />
              </div>) : <h2>No se encontraron resultados</h2>)
            :
            <div className='p-2 d-flex justify-content-center'>
              <ProductList products = {products} setProducts = {setProducts} productsFilter = {productsFilter} 
              clickOnSubmit = {true} />
            </div> 

*/