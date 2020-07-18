import React, {useEffect,lazy, Suspense} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';


import Header from './Components/header/header_component';
import Spinner from './Components/spinner/spinner_component'
import ErrorBoundary from './Components/error-boundary/error-boundary_component'

import {GlobalStyle} from './global_styles'

import { selectCurrentUser } from './Redux/User/user-selector';
import { checkUserSession } from './Redux/User/user-action';


const HomePage = lazy(() => import('./Pages/homepage/homepage_component'))
const ShopPage = lazy(() => import('./Pages/shop/shop_component'))
const SignInAndSignUp = lazy(()=> import('./Pages/sign-in_&_sign-up/sign-in_&_sign-up_component'))
const CheckoutPage = lazy(()=> import('./Pages/checkout/checkout_component'))

const App = ({checkUserSession, currentUser}) => {
  
 useEffect(() => {
  checkUserSession()
 }, [checkUserSession])

    return (
      <div>
      <GlobalStyle />
      <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage}></Route>
              <Route path='/shop' component={ShopPage}></Route>
              <Route exact path='/checkout' component={CheckoutPage}></Route>
              <Route path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}></Route>
            </Suspense>
          </ErrorBoundary>
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
