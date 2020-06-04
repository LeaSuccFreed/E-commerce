import React from 'react';
import {connect} from 'react-redux'


import {addItem} from '../../Redux/Cart/cart_action'

import {    
    CollectionItemContainer, BackgroundImage, 
    CollectionFooterContainer, NameContainer, 
    PriceContainer, AddButton 
} from './collection-item_style'

const CollectionItem = ({item, addItem})=>{
    const { name, price, imageUrl } = item;
    return(
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer className='name'>{name}</NameContainer>
                <PriceContainer className='price'>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={()=>addItem(item)} inverted> Add to cart </AddButton>
        </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}
export default connect(null, mapDispatchToProps)(CollectionItem)