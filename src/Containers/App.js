import React from 'react';
import classes from './App.module.css';
import HomePage from './HomePage/HomePage';
import ProductDetails from './ProductDetails/ProductDetails';
import CreateProduct from './CreateProduct/CreateProduct';
import UpdateProduct from './UpdateProduct/UpdateProduct';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

function App() {
  return(
    <div className={classes.App}>
      <div className={classes.nav}>
        <Link className={classes.link} to={"/"}>Home</Link>
        <Link className={classes.link} to={"/products/create"}>Create Products</Link>
      </div>

      <Switch>
        <Route exact path={'/'}>
          <HomePage/>
        </Route>
        
        <Route exact path='/products/create'>
          <CreateProduct/>
        </Route>

        <Route exact path='/products/update/:id'>
          <UpdateProduct/>
        </Route>

        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>

        <Route exact path={'/404'}>
          <h1 className={classes.notFound}>
            404 !! Not Found
          </h1>
        </Route>
        <Route path={'*'}>
          <Redirect to={'/404'}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
