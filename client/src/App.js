import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './App.scss';

import HomePage from './Pages/homepage/homepage_component';
import ShopPage from './Pages/shop/shop_component';
import Header from './Components/header/header_component';
import SignInAndSignUp from './Pages/sign-in_&_sign-up/sign-in_&_sign-up_component';
import CheckoutPage from './Pages/checkout/checkout_component';

import { selectCurrentUser } from './Redux/User/user-selector';
import { checkUserSession } from './Redux/User/user-action';




const App = ({checkUserSession, currentUser}) => {
  
 useEffect(() => {
  checkUserSession()
 }, [checkUserSession])

    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}></Route>
        </Switch>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,    
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: ()=> dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
