import React, { useState, useEffect } from 'react';
import Loader from '../../Components/Loader/Loader';
import {useParams,useHistory } from 'react-router-dom';
import classes from './UpdateProduct.module.css'

const UpdateProduct = (props)=>{
    const [name, setName]= useState('');
    const [des, setDes]= useState('');
    const [price, setPrice]=useState('');
    const [category, setCategory]=useState('');
    const [image, setImage]=useState('');
    const [loader, setLoader]=useState(false);

    const history = useHistory();
    const { id } = useParams();

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
                setName(data.title);
                setDes(data.description);
                setPrice(data.price);
                setCategory(data.category);
                setImage(data.image);
            } else {
                history.push("/404");
            }
        })
        .catch((err) => history.push("/404"));
    }, [id, history]);

    const onSubmit = ()=>{
        setLoader(true);
        fetch(`http://54.162.199.74/products/${id}`, {
        method: "PUT",
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
            alert('Product Updated Successfully!!');
            history.push('/');
        }).catch((e)=>{
            history.push('/404');
        });
    }

    let updateForm = (
        <div className={classes.update}>
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
        updateForm = <Loader/>
    }
    return(
        <>
            {updateForm}
        </>
    )
    
}

export default UpdateProduct;