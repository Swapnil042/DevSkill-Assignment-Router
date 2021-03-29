import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams,useHistory } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Loader from '../../Components/Loader/Loader';
import {setSelectedProduct} from '../../store/Actions/ProductActions'
import {setCartProducts} from '../../store/Actions/CartActions';

const ProductDetails = (props)=>{
    const [loader, setLoader] = useState(true);

    const {selectedProduct} = useSelector((state)=> state.productStore);
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://54.162.199.74/products/${id}`,{
            headers: { "Content-Type": "application/json"}
        }).then(res=>{
            setLoader(false);
            if (res.data !== null) {
                console.log(res.data);
                dispatch(setSelectedProduct(res.data));
            } else {
                history.push("/404");
            }
        }).catch((err) => history.push("/404"));

    }, [id, history, dispatch]);

    const onAddToCart = ()=>{
        dispatch(setCartProducts(selectedProduct));
        history.push("/");
    }

    let productDetails = <Loader/>

    if(loader === false){
        productDetails = (
            <Grid container justify={'center'}>
                <Grid item md={6}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Card>
                                <CardContent>
                                    <div style={{display: 'flex'}}>
                                        <div style={{width: '60%', textAlign: 'left'}}>
                                            <h3>{selectedProduct.title}</h3> 
                                            <p><b>Price: $</b>{selectedProduct.price}</p>
                                            <p><b>Description: </b>{selectedProduct.description}</p>
                                            <p><b>Category: </b>{selectedProduct.category}</p>
                                        </div>
                                        <div style={{marginLeft: 'auto', width: '40%'}}>
                                            <img style={{width: '100%'}}src={selectedProduct.image} alt={selectedProduct.category}/>
                                        </div>
                                    </div>
                                    <CardActions>
                                        <Button onClick={onAddToCart} size="small">
                                            Add to Cart
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
    return(
        <>
            {productDetails }
        </>
    )
}

export default ProductDetails;