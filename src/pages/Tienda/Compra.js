import { useContext, useState } from "react";
import './Compra.css'
import {Button, TextField, Alert, AlertTitle, Box, Collapse} from '@mui/material';
// CONTEXT
import { ItemsCart } from "../../contexts/ItemsContext";
// FIREBASE
import { addDoc, collection, getFirestore, setDoc } from "firebase/firestore";

const Compra = () => {

    const { productosCarrito, total} = useContext(ItemsCart);
    const [user, setUser] = useState({})
    const [doc, setDoc] = useState('')
    const [open, setOpen] = useState(true)
    const [showAlert, setShowAltert] = useState(false)

    const updateUser = (event) => {
        setUser( user => ({...user, [event.target.name]: event.target.value }))
    }

    const placeOrder = async () => {
        const order = {
            buyer: user,
            items: productosCarrito,
            total: total
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then(({id}) => setDoc(id));
        setTimeout(setShowAltert(true), 2000);
    };

    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkoutClass">
                <div>
                    <p>Formulario</p>
                    <div className="form">
                        <TextField name="name" label="Nombre" variant="outlined" 
                            onChange={updateUser} />
                        <TextField name="surname" label="Apellido" variant="outlined" 
                            onChange={updateUser}/>
                        <TextField name="phone" label="Número de teléfono" variant="outlined" 
                            onChange={updateUser}/>
                        <TextField name="address" label="Dirección" variant="outlined" 
                            onChange={updateUser}/>
                        <TextField name="city" label="Ciudad" variant="outlined" 
                            onChange={updateUser}/>
                        <TextField name="state" label="Provincia" variant="outlined" 
                            onChange={updateUser}/>
                        <TextField name="email" label="Email" variant="outlined" 
                            onChange={updateUser}/>
                        <TextField name="newemail" label="Repita Email" variant="outlined" />
                    </div>
                    <p className="totalAPagar">Total a Pagar ${total} </p>
                    <Button variant="contained" type="submit" color="success" onClick={()=> placeOrder()}> Comprar </Button>
                    {
                        showAlert ? 
                            <Collapse in={open} >
                                <Alert severity="success" onClose={()=>{setOpen(false)}} sx={{marginTop: "15px"}} >
                                    <AlertTitle>Completado!</AlertTitle>
                                        Tu compra se realizó con éxito. Número de Orden: {doc}
                                </Alert>
                            </Collapse>
                            : ""
                    }
                </div>
                <div>
                    <p>Tu compra</p>
                    {productosCarrito.map(product => (
                        <div className="miniCart">
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                            <div>{product.quantity}</div>
                            <div>{product.price * product.quantity}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Compra