import React from 'react';

import CollectionItem from '../collection-item/collectio-item_component'
import './collection-preview_component.scss';



const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
            items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}/>
            ))
            }
        </div>
    </div>
)

export default CollectionPreview