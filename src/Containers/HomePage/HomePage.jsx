import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Loader from '../../Components/Loader/Loader';
import {setAllProducts} from '../../store/Actions/ProductActions';

const HomePage = ()=>{
    const {allProducts} = useSelector((state)=> state.productStore);
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        setLoader(true);
        axios.get('http://54.162.199.74/products',{
            headers:{"Content-Type": "application/json"}
        }).then(res=>{
            setLoader(false);
            dispatch(setAllProducts(res.data))
        }).catch(err=>{
            console.log(err.response);
        })
    },[dispatch])

    const onProductClicked = (id) => {
        history.push(`/products/${id}`);
    };

    let products = (
        <Grid container justify={'center'}>
            <Grid item md={6}>
                <Grid container spacing={2}>
                {
                    allProducts.map((product, idx) => {
                        return <Grid item md={6} key={idx}>
                                    <Card>
                                        <CardContent>
                                            <div style={{display: 'flex', textAlign: 'left'}}>
                                                <div style={{width: '60%'}}>
                                                    <h3>{product.title}</h3> 
                                                    <b>Price: $</b>{product.price}
                                                </div>
                                                <div style={{marginLeft: 'auto', width: '40%'}}>
                                                    <img style={{width: '100%'}}src={product.image} alt={product.category}/>
                                                </div>
                                            </div>
                                            <CardActions>
                                                <Button onClick={()=>onProductClicked(product.id)} size="small">
                                                    Details
                                                </Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                    })
                }
                </Grid>
            </Grid>
        </Grid>
    )
    if(loader){
        products = <Loader/>
    }

    return(
        <>
            {products}    
        </>
    )
}

export default HomePage;