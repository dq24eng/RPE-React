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

    console.log(products, setProducts, productsFilter, clickOnSubmit)
    //console.log(productsFilter)
    //const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let productos = []
    const {cart, setCart, añadirCarrito} = useContext(ItemsCart);
    const q = query(collection(db, "products"));
    //const [productsRP, setProductsRP] = useState([]);

    setTimeout(()=>{setLoading(false)}, 2000)
    clickOnSubmit ? productos = productsFilter : productos = products;

    //console.log(products)

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
                        <Button variant="dark" onClick={añadirCarrito} className='btn align-self-center'>Añadir al carrito</Button>
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

    /*useEffect(() => {
        const getProductsRP = async() => {
            try {
                const querySnapshot = await getDocs(q);
                const prods = [];
                querySnapshot.forEach((doc) => {
                    prods.push({...doc.data()})
                });
                setProductsRP(prods);
                console.log(prods)
            } finally {
                setLoading(false)
            }
        }
        getProductsRP();
        //(productsRP.length == 0) ? setLoading(false) : setLoading(true)
    }, []);*/

    /*useEffect (()=>{
        getFetch
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[])*/

    //console.log(productos)

    //(products.length == 0) ? setLoading(true) : setLoading(false)

