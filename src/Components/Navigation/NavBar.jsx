import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './NavBar.module.css';

const NavBar = ()=>{
    const {cart} = useSelector((state)=>state.cartStore);

    return(
        <div className={classes.nav}>
            <Link className={classes.link} to={"/"}>Home</Link>
            <Link className={classes.link} to={"/cart"}>Cart: Total Item {cart.length}</Link>
        </div>
    )
}

export default NavBar;