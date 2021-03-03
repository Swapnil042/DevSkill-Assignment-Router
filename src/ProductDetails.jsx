import React,{useEffect, useState} from 'react';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

const ProductDetails = (props)=>{
    const [loader, setLoader]= useState(true);
    const params = useParams();


    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false);
        },2000);
    },[])

    const index = parseInt(params.id);
    const details =  props.product[index-1]

    let productDetails = <Spinner/>

    if(loader === false){
        productDetails = (<div style={{margin: 'auto', maxWidth: '40%', border: '2px solid grey', boxShadow: '5px 5px grey', borderRadius: '5px', padding: '20px' }}>
                            <h3>Product Details</h3>
                            <p><b>Product Name: </b>{details.name}</p>
                            <p><b>Price: </b>{details.price}</p>
                            <p><b>Details: </b>{details.description}</p>
                            <p><b>Category: </b>{details.category}</p>
                        </div>);
    }
    return(
        <>
            {productDetails }
        </>
    )
}

export default ProductDetails;