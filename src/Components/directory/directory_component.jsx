import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item_component';

import './directory_style.scss';
import { selectDirectorySections } from '../../Redux/Directory/directory-selector';


function Directory({sections}){
        return(
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                        ))
                }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)