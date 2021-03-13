import React,{useEffect, useState} from 'react';
import Loader from '../../Components/Loader/Loader';
import { useParams,useHistory } from 'react-router-dom';
import classes from './ProductDetails.module.css';

const ProductDetails = (props)=>{
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);

    const { id } = useParams();
    
    const history = useHistory();

    useEffect(() => {
        fetch(`http://54.162.199.74/products/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((response) => response.json())
        .then((data) => {
            setLoader(false);
            if (data !== null) {
                setProduct(data);
            } else {
                history.push("/404");
            }
        })
        .catch((err) => history.push("/404"));
    }, [id, history]);

    const onUpdate = (id)=>{
        history.push(`/products/update/${id}`)
    }

    let productDetails = <Loader/>

    if(loader === false){
        productDetails = (<div className={classes.details}>
                            <div style={{width: '60%'}} >
                                <h3>Product Details</h3>
                                <p><b>Product Name: </b>{product.title}</p>
                                <p><b>Price: </b>{product.price}</p>
                                <p><b>Details: </b>{product.description}</p>
                                <p><b>Category: </b>{product.category}</p>
                                <button className={classes.button} onClick={()=> onUpdate(product.id)}>Update</button>
                            </div>
                            <div style={{width: '30%'}}>
                                <img src={product.image} alt={product.category} style={{width: '100%'}}/>
                            </div>
                            
                            
                            
                        </div>);
    }
    return(
        <>
            {productDetails }
        </>
    )
}

export default ProductDetails;