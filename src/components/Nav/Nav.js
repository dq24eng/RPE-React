import { useContext, useState } from "react";
import "./Nav.css"
import logo from "../../images/logo.png"
//Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// React Router DOM
import {Link} from 'react-router-dom';
// CONTEXT
import { ItemsCart } from "../../contexts/ItemsContext";

const NavigationBar = () => {

    const { cart, removeProduct, productosCarrito, onCleanCart, total} = useContext(ItemsCart);
    const [active, setActive] = useState(false);

    return (
        <> 
            <Navbar bg="dark" variant="dark" className="justify-content-center d-flex p-2 w-100" expand="lg" >
                <Container className="m-0 ">
                    <Navbar.Brand href="#home" className=" w-100">
                        <div>
                            <ul className="NavBarUl w-100 d-flex m-0"> 
                                <div className="logoClass p-1">
                                    <a href="#Logo">
                                        <img src={logo} alt="logo" height="92" width="110" className="d-inline-block align-top " />
                                    </a>
                                </div>
                                <div className="liClass">    
                                    <Link className="internMenu link underline" to="/"> HOME </Link>
                                    <Link className="internMenu link underline" to="/servicios"> SERVICIOS </Link>
                                    <Link className="internMenu link underline" to="/tienda"> TIENDA </Link>
                                    <Link className="internMenu link underline" to="/contact"> CONTACTO </Link>
                                </div>
                                <div className="shopCartClass" onClick={() => setActive(!active)}>
                                    <li>
                                        <div style={{display: "flex"}} className={`${active ? '' : 'hidden-cart'}`}>
                                            <ShoppingCartIcon sx={{color: "white"}}/>   
                                            <span style={{color: "white"}}>{cart}</span> 
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                        <div className={`container-cart-products ${ active ? '' : 'hidden-cart' }`}>
                            {productosCarrito.length ? (
                                <>
                                    <div className='row-product'>
                                        {productosCarrito.map(product => (
                                            <div className='cart-product' key={product.id}>
                                                <div className='info-cart-product'>
                                                    <p className="img-producto-carrito"> 
                                                        <img src={product.img} alt={product.name} height="50" width="50"></img>
                                                    </p>
                                                    <p className='cantidad-producto-carrito'> {product.quantity} </p>
                                                    <p className='titulo-producto-carrito'> {product.name} </p>
                                                    <p className='precio-producto-carrito'>${product.price}</p>
                                                </div>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    fill='none'
                                                    viewBox='0 0 24 24'
                                                    strokeWidth='1.5'
                                                    stroke='currentColor'
                                                    className='icon-close'
                                                    onClick={() => removeProduct(product.id)}
                                                >
                                                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='cart-total'>
                                        <p>Total:</p>
                                        <p className='total-pagar'>${total}</p>
                                    </div>
                                    <div className="carrito-widget">
                                        <button className='btn-clear-all' onClick={onCleanCart}> Vaciar Carrito </button>
                                        <Link className='btn-clear-all irACarrito' to="/tienda/carrito" onClick={() => setActive(false)}> 
                                            Ir al Carrito
                                        </Link>
                                    </div>
                                </>
                            ) : ( <p className='cart-empty'>El carrito está vacío</p> )}
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;


