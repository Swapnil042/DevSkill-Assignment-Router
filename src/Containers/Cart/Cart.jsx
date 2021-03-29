import React from 'react';
import {useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Cart = (props)=>{

    const {cart} = useSelector((state)=> state.cartStore);
    
    return(
        <>
            {cart.length === 0? <h2>Cart Is Empty</h2>:(<Grid container justify={'center'}>
                <Grid item md={6}>
                    <Grid container spacing={2}>
                    {
                        cart.map((product, idx) => {
                            return <Grid item md={12} key={idx}>
                                        <Card>
                                            <CardContent>
                                                <div style={{display: 'flex'}}>
                                                    <div style={{width: '70%', textAlign: 'left'}}>
                                                    {/* style={{textAlign: 'left'}} */}
                                                        <h3>{product.title}</h3> 
                                                        <b>Price: $</b>{product.price}
                                                    </div>
                                                    <div style={{marginLeft: 'auto', width: '10%'}}>
                                                        <img style={{width: '100%'}}src={product.image} alt={product.category}/>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                        })
                    }
                    </Grid>
                </Grid>
            </Grid>)}
        </>
    )
}

export default Cart;