import React, {useState, useEffect}  from 'react';
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

const ProductList = ({allProducts, setAllProducts, total, setTotal, cart, setCart}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    function añadirCarrito () {
        setCart (cart+1)
    }

    useEffect (()=>{
        getFetch
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[])

    return (
        <div className="container-items" >
            {loading ? <div className='loadingBlock'> <DotSpinner size={35} color="black" /> <p>Cargando</p>  </div> : 
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
            ))}
        </div>
    )
}

ProductList.propTypes = {
    cart: PropTypes.number.isRequired,
};

export default ProductList;

//<button onClick={añadirCarrito}>Añadir al carrito</button>