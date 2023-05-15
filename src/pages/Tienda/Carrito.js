import { useContext, useState } from "react";
import './Carrito.css'
import {Button} from '@mui/material';
// CONTEXT
import { ItemsCart } from "../../contexts/ItemsContext";
// React Router DOM
import {Link} from 'react-router-dom';

const Carrito = () => {

    const { removeProduct, productosCarrito, onCleanCart, total} = useContext(ItemsCart);

    return (
        <div>
            <h1>Tu Carrito</h1>
            <div className= "">
                {
                    productosCarrito.length ? (
                        <>
                            <div>
                                <div className="product-list title">
                                    <div>Producto</div>
                                    <div>Detalle</div>
                                    <div>Cantidad</div>
                                    <div>Precio unitario</div>
                                    <div>Total</div>
                                </div>
                                {productosCarrito.map(product => (
                                    <div className="product-list" key={product.id}> 
                                        <div><img src={product.img} alt={product.name} height="100" width="100"></img></div>
                                        <div>{product.name}</div>
                                        <div>{product.quantity}</div>
                                        <div>{product.price}</div>
                                        <div>{product.price * product.quantity}</div>
                                    </div> 
                                ))}
                                <div className="totalPagarClass">
                                    <p>Total a Pagar: {total}</p>
                                    <Link to="/tienda/carrito/compra">
                                        <Button variant="contained" type="submit" color="success"> Finalizar Compra </Button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </>
                    ) : (<h1>Por favor ve a nuestra Tienda para llenar tu carrito</h1>)
                }
            </div>
        </div>
    )
}

export default Carrito;