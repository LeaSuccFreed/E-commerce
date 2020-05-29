import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './App.scss';

import HomePage from './Pages/homepage/homepage_component';
import ShopPage from './Pages/shop/shop_component';
import Header from './Components/header/header_component';
import SignInAndSignUp from './Pages/sign-in_&_sign-up/sign-in_&_sign-up_component';
import CheckoutPage from './Pages/checkout/checkout_component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './Redux/User/user-action'
import { selectCurrentUser } from './Redux/User/user-selector';




class App extends Component{

  unsubscribeFromAuth = null
  
  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
              ...snapShot.data()
            })  
          })
      }
       setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps =(dispatch)=>{
  return{
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
