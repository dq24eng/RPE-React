import React, { useState, useEffect } from 'react'
import "./ProductDetail.css"
import {useParams} from 'react-router-dom';
// FIREBASE 
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
//UIBall
import { DotSpinner } from '@uiball/loaders'

const ProductDetail = () => {

    const [product, setProduct] = useState({});
    let {id} = useParams ();

    useEffect(() => {
        const getProductsRP = async() => {
            const q = query(collection(db, "products"), where (documentId(), "==", id));
            const prod = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                prod.push({...doc.data()})
            });
            setProduct(prod);
        };
        getProductsRP();
    }, [id]);

    let producto = new Object()
    producto = product[0]

    return (
        <div>
            <div className='Prod' key={product.id}>
                {   
                    (producto==undefined) ? <div className='loadingBlock'> <DotSpinner size={35} color="black" /> <p>Cargando</p>  </div> :
                    <div> 
                        <div> 
                            <img src={producto.img} alt={producto.name} height="400" width="350" />
                        </div>
                        <p>{producto.name}</p>
                        <p>{producto.description}</p>
                        <p>{producto.code}</p>
                        <p>$ {producto.price}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductDetail

