import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './with-spinner_style'

const WithSpinner = WrappedComponent =>{ 
    const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}/>
    )
}
return Spinner
}    

export default WithSpinner


