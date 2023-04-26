import { useContext } from "react";
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

//const NavigationBar = ({allProducts, setAllProducts, total, setTotal, cart, setCart}) => {
const NavigationBar = ({products, setProducts, total, setTotal}) => {

    const { cart, setCart } = useContext(ItemsCart);

    return (
        <> 
            <Navbar bg="dark" variant="dark" className="justify-content-center d-flex p-2 w-100" expand="lg">
                <Container className="m-0 ">
                    <Navbar.Brand href="#home" className="d-flex w-100">
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
                            <div className="shopCartClass">
                                <li>
                                    <div style={{display: "flex"}} >
                                        <ShoppingCartIcon sx={{color: "white"}}/>   
                                        <span style={{color: "white"}}>{cart}</span> 
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;

