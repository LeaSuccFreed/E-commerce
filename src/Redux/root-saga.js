import {all, call} from 'redux-saga/effects'
import { fetchCollectionsStart, shopSagas } from './shop/shop_saga'
import { userSaga } from './User/user_sagas'
import { cartSagas } from './Cart/cart_saga'

export function* rootSaga(){
    yield all([
        //call(fetchCollectionsStart),
        call(userSaga),
        call(cartSagas),
        call(shopSagas)
    ])
}