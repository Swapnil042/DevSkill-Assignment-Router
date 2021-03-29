import { Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './Containers/HomePage/HomePage';
import ProductDetails from './Containers/ProductDetails/ProductDetails';
import Cart from './Containers/Cart/Cart'
import NavBar from './Components/Navigation/NavBar';

import classes from './App.module.css';

function App() {
  return (
  <>
      
      <NavBar/>
      <div>
        <Switch>
          <Route exact path={'/'}>
            <HomePage/>
          </Route>

          <Route exact path="/products/:id">
            <ProductDetails />
          </Route>

          <Route exact path="/cart">
            <Cart />
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
    </>
  );
}

export default App;
