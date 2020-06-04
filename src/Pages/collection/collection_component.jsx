import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../Components/collection-item/collectio-item_component'

import { selectCollection } from '../../Redux/shop/shop_selectors'
import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection_stylex';


function CollectionPage({collection}) {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{ title }</CollectionTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
