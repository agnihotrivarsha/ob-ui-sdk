import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ children, ...rest }) => {
    // allow only authorized path
    const token = localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined'
    return token ? <Route {...rest}>{children}</Route> : <Redirect to="/" />
}

export default PrivateRoute