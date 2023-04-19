import React, { useState, useEffect } from 'react'
import "./ProductDetail.css"
import getFetch from "../../components/Data/data";
import {useParams} from 'react-router-dom';

const ProductDetail = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    let {id} = useParams ();

    useEffect (()=>{
        getFetch
        .then((resp) => setProduct(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },[])

    return (
        <div>
            <div className='Prod'>
                {
                    loading ? <div>Cargando</div> :
                        <div>
                            <div> 
                                <img src={product[id-1].urlDetail} alt={product[id-1].name} height="400" width="350" />
                            </div>
                            <p>{product[id-1].name}</p>
                            <p>{product[id-1].description}</p>
                            <p>{product[id-1].code}</p>
                            <p>$ {product[id-1].price}</p>
                        </div>
                        
                }
            </div>
        </div>
    )
}

export default ProductDetail

