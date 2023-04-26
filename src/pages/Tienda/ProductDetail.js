import React, { useState, useEffect } from 'react'
import "./ProductDetail.css"
//import getFetch from "../../components/Data/data";
import {useParams} from 'react-router-dom';

const ProductDetail = ({products, setProducts}) => {

    //const [loading, setLoading] = useState(true);
    let {id} = useParams ();
    let productos1 = []
    const productos = products.map((prod)=>{
        if (id==prod.id){
            productos1 = prod
        }
    })

    return (
        <div>
            <div className='Prod'>
                {
                    products.length==0 ? <div>Cargando</div> :
                        <div>
                            <div> 
                                <img src={productos1.img} alt={productos1.name} height="400" width="350" />
                            </div>
                            <p>{productos1.name}</p>
                            <p>{productos1.description}</p>
                            <p>{productos1.code}</p>
                            <p>$ {productos1.price}</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductDetail


