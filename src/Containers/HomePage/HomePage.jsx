import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Loader from '../../Components/Loader/Loader';

function HomePage() {
    const [productList, setProductList] = useState([]);
    const [loader, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch("http://54.162.199.74/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            setProductList(data);
        })
        .catch((err) => {
            history.push('/404');
        })
    }, [history]);

    const onProductClicked = (id) => {
        history.push(`/products/${id}`);
    };

    let allProducts = <Loader/>

    if(loader === false){
        allProducts = <Grid container justify={'center'}>
                        <Grid item md={6}>
                            <Grid container spacing={2}>
                                {
                                    productList.map((product, idx) => {
                                        return <Grid item md={6} key={idx}>
                                                    <Card>
                                                        <CardContent>
                                                            <div style={{display: 'flex'}}>
                                                                <div style={{width: '60%'}}>
                                                                    <h3>{product.title}</h3> 
                                                                    <b>Price: $</b>{product.price}
                                                                </div>
                                                                <div style={{marginRight: '50px',width: '40%'}}>
                                                                    <img style={{marginRight: 'auto',width: '100%'}}src={product.image} alt={product.category}/>
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
    }
    
    return (
        <>
            {allProducts}
        </>        

    );
}

export default HomePage;

