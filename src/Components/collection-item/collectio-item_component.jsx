import React from 'react';
import {connect} from 'react-redux'


import './collection-item_style.scss'
import CustomButton from '../custom-button/custom-button_component';
import {addItem} from '../../Redux/Cart/cart_action'

const CollectionItem = ({item, addItem})=>{
    const { name, price, imageUrl } = item;
    return(
        <div className='collection-item'>
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=>addItem(item)} inverted> Add to cart </CustomButton>
        </div>
)}

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}
export default connect(null, mapDispatchToProps)(CollectionItem)