import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../Redux/shop/shop_action'

const CollectionPageContainer  = lazy(() => import('../collection/collection.container'));
const CollectionsOverviewContainer = lazy(() => import('../../Components/collections-overview/collections-overview_container'))

const ShopPage = ({fetchCollectionsStart, match}) => {
  
    useEffect(() => {
      fetchCollectionsStart()
    }, [fetchCollectionsStart])
        return(
            
              <div className="shop-page">
              <Suspense>
                  <Route  exact path={`${match.path}`} 
                          component={CollectionsOverviewContainer}
                  />
                  <Route  path={`${match.path}/:collectionId`} 
                          component={CollectionPageContainer}
                  />
                </Suspense>
              </div>
            
        )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
