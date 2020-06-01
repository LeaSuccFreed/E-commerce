import React from 'react';
import { Route } from 'react-router';

import CollectionsOverview from '../../Components/collections-overview/collections-overview_component';
import CollectionPage from '../collection/collection_component';



const ShopPage = ({match}) => {
        return(
            <div className="shop-page">
              <Route exact path={`${match.path}`} component={CollectionsOverview} />
              <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
}

export default ShopPage
