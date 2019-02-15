import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import './App.css'

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/privateRoute';

import Cuisine from './components/cuisine';
import Landing from './components/layout/landing';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import CuisineDetails from './components/cuisineDetails';
import AddCuisine from './components/addCuisine';
import EditCuisine from './components/editCuisine';
import Menu from './components/menu';
import Register from './components/auth/register';
import Login from './components/auth/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMenu from './components/addMenu';
import CartDisplay from './components/cartDisplay';
import OrderDetails from './components/orderDetails';
import Restaurant from './components/restaurant';
import RestaurantDetails from './components/restaurantDetails';

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Clear current Profile
//       store.dispatch(clearCurrentProfile());
      // Redirect to login
      window.location.href = '/login';
    }
  }

const App = () => (
    <Provider store={store}>
        <Router>
          <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
                <Route exact path='/users/register' component={Register} /> 
                <Route exact path='/users/login' component={Login} />
                <Route exact path='/restaurants' component={Restaurant}/>
                <Switch>
                     <Route exact path='/cuisines/:id/menus' component={Menu}/> 
                </Switch>
                <Switch>
                     <Route exact path='/restaurants/:name' component={RestaurantDetails}/> 
                </Switch>
                <Switch>
                     <Route exact path='/restaurants/:name/cuisines' component={Cuisine}/> 
                </Switch>
                <Switch>    
                    <Route exact path='/cuisines/add' component={AddCuisine} />
                </Switch>
                <Switch>    
                    <Route exact path='/cuisines/edit/:id' component={EditCuisine} />
                </Switch> 
                {/* <Switch>    
                    <Route exact path='/cuisines/:id' component={CuisineDetails} />
                </Switch> */}
                <Switch>    
                    <Route exact path='/menus' component={Menu} />
                </Switch> 
                <Switch>    
                    <Route exact path='/menus/add' component={AddMenu} />
                </Switch>
                <Switch>    
                    <Route exact path='/users/cart_items' component={CartDisplay} />
                </Switch> 
                <Switch>    
                    <Route exact path='/orders' component={OrderDetails} />
                </Switch>   

         </div>
         <Footer />
         </div>
         </Router>
      </Provider>

)
export default App;

