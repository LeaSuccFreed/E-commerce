import React from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../Redux/shop/shop_action'

import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../Components/collections-overview/collections-overview_container'

class ShopPage extends React.Component{
  
  componentDidMount(){
    const { fetchCollectionsStart } = this.props;

    fetchCollectionsStart()
  }

    render(){
      const { match } = this.props

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
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)
