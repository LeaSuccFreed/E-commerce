import {connect} from 'react-redux'
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect'

import { selectCollectionsLoaded } from '../../Redux/shop/shop_selectors'
import WithSpinner from '../../Components/with-spinner/with-spinner_component'
import CollectionPage from './collection_component'

const mapStateProps = createStructuredSelector({
    isLoading: (state) => !selectCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer 
