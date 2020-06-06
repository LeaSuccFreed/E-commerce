import React, { useEffect, useRef, useState} from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux'

import CollectionsOverview from '../../Components/collections-overview/collections-overview_component';
import CollectionPage from '../collection/collection_component';
import WithSpinner from '../../Components/with-spinner/with-spinner_component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import { updateCollections } from '../../Redux/shop/shop_action';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

function ShopPage({match, updateCollections}){
  
const [loading,setLoading] = useState(true)

  //const {match} = props
  let unsubscribeFromSnapshot = useRef(null)
  
  useEffect(()=>{
    //const {updateCollections} = props
    const collectionRef = firestore.collection('collections');
    unsubscribeFromSnapshot.current = collectionRef.get().then(snapshot => {
     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
     updateCollections(collectionsMap)
     setLoading(false)
     console.log(collectionsMap)
    })
  }, [updateCollections])

        return(
            <div className="shop-page">
              <Route  exact path={`${match.path}`} 
                      render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/> }
              />
              <Route  path={`${match.path}/:collectionId`} 
                      render={props => <CollectionPageWithSpinner isLoading={loading} {...props} /> }
              />
            </div>
        )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  }
}

export default connect(null, mapDispatchToProps)(ShopPage)
