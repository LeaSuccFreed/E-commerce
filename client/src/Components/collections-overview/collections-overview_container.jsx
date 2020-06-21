import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../Redux/shop/shop_selectors'
import WithSpinner from '../with-spinner/with-spinner_component'
import CollectionsOverviews from './collections-overview_component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverviews)

export default CollectionsOverviewContainer;

