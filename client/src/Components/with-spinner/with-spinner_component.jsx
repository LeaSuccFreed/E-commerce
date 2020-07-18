import React from 'react'
import Spinner from '../spinner/spinner_component'
const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <WrappedComponent {...otherProps}/>
    )
}



export default WithSpinner


