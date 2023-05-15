import { useContext, useState } from "react";
import './Compra.css'
import {Button, TextField} from '@mui/material';
// CONTEXT
import { ItemsCart } from "../../contexts/ItemsContext";
// FIREBASE
import { addDoc, collection, getFirestore, setDoc, getDoc, doc } from "firebase/firestore";

const Compra = () => {

    const { productosCarrito, total} = useContext(ItemsCart);
    const [nameInput, setNameInput] = useState('')
    const [surnameInput, setSurnameInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')
    const [addressInput, setAddressInput] = useState('')
    const [cityInput, setCityInput] = useState('')
    const [stateInput, setStateInput] = useState('')
    const [emailInput, setEmailInput] = useState('')


    const placeOrder = async () => {
        const order = {
            buyer: {name: nameInput, surname: surnameInput, phone: phoneInput, address: addressInput, email: emailInput},
            items: productosCarrito,
            total: total
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then(({id}) => setDoc(id));
        const docRef = doc(db, order.buyer);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) console.log(docSnap.data())
    };

    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkoutClass">
                <div>
                    <p>Formulario</p>
                    <div className="form">
                        <TextField id="nameInput" label="Nombre" variant="outlined" 
                            onChange={(event) => {setNameInput(event.target.value)}} />
                        <TextField id="surnameInput" label="Apellido" variant="outlined" 
                            onChange={(event) => {setSurnameInput(event.target.value)}}/>
                        <TextField id="phoneInput" label="Número de teléfono" variant="outlined" 
                            onChange={(event) => {setPhoneInput(event.target.value)}}/>
                        <TextField id="addressInput" label="Dirección" variant="outlined" 
                            onChange={(event) => {setAddressInput(event.target.value)}}/>
                        <TextField id="cityInput" label="Ciudad" variant="outlined" 
                            onChange={(event) => {setCityInput(event.target.value)}}/>
                        <TextField id="stateInput" label="Provincia" variant="outlined" 
                            onChange={(event) => {setStateInput(event.target.value)}}/>
                        <TextField id="emailInput" label="Email" variant="outlined" 
                            onChange={(event) => {setEmailInput(event.target.value)}}/>
                        <TextField id="newemailInput" label="Repita Email" variant="outlined" />
                    </div>
                    <p className="totalAPagar">Total a Pagar ${total} </p>
                    <Button variant="contained" type="submit" color="success" onClick={()=> placeOrder()}> Comprar </Button>
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