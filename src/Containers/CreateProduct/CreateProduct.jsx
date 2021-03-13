import React, { useState } from 'react';
import Loader from '../../Components/Loader/Loader';
import {useHistory} from 'react-router-dom';
import classes from './CreateProduct.module.css';

const CreateProduct = (props)=>{
    const [name, setName]= useState('');
    const [des, setDes]= useState('');
    const [price, setPrice]=useState('');
    const [category, setCategory]=useState('');
    const [image, setImage]=useState("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
    const [loader, setLoader]=useState(false);

    const history = useHistory();

    const onSubmit = ()=>{
        setLoader(true);
        fetch("http://54.162.199.74/products", {
        method: "POST",
        body: JSON.stringify({
            title:name,
            price: price,
            description: des,
            image: image,
            category: category,
        }),
        })
        .then((res) => res.json())
        .then((json) => {
            setLoader(false);
            alert('Product Created Successfully!!');
            history.push('/');
        }).catch((e)=>{
            history.push('/404');
        });
    }

    let createForm = (
        <div style={{width: '250px',height:'250px',margin: 'auto'}}>
            <img style={{width: "50%"}}src={image} alt='i'/>
            <div>
                <p>Name</p>
                <input type='text' value={name} onChange={e=>{
                    setName(e.target.value);
                }}/>
            </div>
            <div>
                <p>Price</p>
                <input type='Number' value={price} onChange={e=>{
                    setPrice(e.target.value);
                }}/>
            </div>
            <div>
                <p>Description</p>
                <input type='text' value={des} onChange={e=>{
                    setDes(e.target.value);
                }}/>
            </div>
            <div>
                <p>Category</p>
                <input type='text' value={category} onChange={e=>{
                    setCategory(e.target.value);
                }}/>
            </div>
            <button className={classes.button} onClick={onSubmit}>Update</button>
        </div>
    );

    if(loader === true){
        createForm = <Loader/>
    }
    return(
        <>
            {createForm}
        </>
    )
    
}

export default CreateProduct;