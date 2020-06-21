import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../Redux/shop/shop_action'

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../Components/collections-overview/collections-overview_container'

const ShopPage = ({fetchCollectionsStart, match}) => {
  
    useEffect(() => {
      fetchCollectionsStart()
    }, [fetchCollectionsStart])
        return(
            <div className="shop-page">
              <Route  exact path={`${match.path}`} 
                      component={CollectionsOverviewContainer}
              />
              <Route  path={`${match.path}/:collectionId`} 
                      component={CollectionPageContainer}
              />
            </div>
        )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
