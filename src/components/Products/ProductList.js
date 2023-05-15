import React, {useState, useEffect, useContext}  from 'react';
import getFetch from "../Data/data";
import './ProductList.css'
//UIBall
import { DotSpinner } from '@uiball/loaders'
//Bootstrap
import Button from 'react-bootstrap/Button';
//PROP Types 
import { PropTypes } from 'prop-types';
//React Router DOM
import {Link} from 'react-router-dom';
//Context 
import { ItemsCart } from "../../contexts/ItemsContext";
// Firebase 
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

const ProductList = ({products, setProducts, productsFilter, clickOnSubmit }) => {

    const [loading, setLoading] = useState(true);
    let productos = []
    const {cart, setCart, addProduct, allProductsCart, removeProduct, productosCarrito} = useContext(ItemsCart);
    const q = query(collection(db, "products"));

    setTimeout(()=>{setLoading(false)}, 2000)
    clickOnSubmit ? productos = productsFilter : productos = products;

    return (
        <div className="container-items" >
            {loading ? <div className='loadingBlock'> <DotSpinner size={35} color="black" /> <p>Cargando</p>  </div> : 
            productos.map ((product) => (
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
                        <Button variant="dark" 
                        onClick={()=> addProduct(product, product.quantity) } 
                        className='btn align-self-center'>
                                Añadir al carrito
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

ProductList.propTypes = {
    cart: PropTypes.number.isRequired,
};

export default ProductList;
