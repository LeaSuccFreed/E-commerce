import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux'

import CollectionsOverview from '../../Components/collections-overview/collections-overview_component';
import CollectionPage from '../collection/collection_component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import { updateCollections } from '../../Redux/shop/shop_action';



const ShopPage = (props) => {

  let unsubscribeFromSnapshot = null;
  const {match} = props

  useEffect(()=>{
    const {updateCollections} = props
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
     updateCollections(collectionMap)
    })
  }, [])

        return(
            <div className="shop-page">
              <Route exact path={`${match.path}`} component={CollectionsOverview} />
              <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  }
}

export default connect(null, mapDispatchToProps)(ShopPage)
