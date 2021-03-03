import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { useHistory } from 'react-router-dom';

const ProductPage = (props) => {
    const [loader, setLoader]= useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false);
        },2000);
    },[]);

    const history = useHistory();

    const onProductClicked = (id)=>{
        history.push(`/product-details/${id}`)
    }

    let productList = <Spinner/>

    if(loader === false){
        productList = <div style={{margin: 'auto', maxWidth: '40%', border: '2px solid grey', boxShadow: '5px 5px grey', borderRadius: '5px', padding: '20px'}}>
                        <h3>Product Page</h3>
                        {
                            props.product.map((data, idx) => {
                                return <p className='list' key={idx} onClick={()=>onProductClicked(idx+1)}>
                                            {idx + 1}. <b>{data.name}</b>, <b>Price: </b>{data.price}
                                        </p>
                            })
                        }
                    </div>
    }
    
    return (
        <>
            {productList}
        </>        

    );
}

export default ProductPage;