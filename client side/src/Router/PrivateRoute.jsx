import React, { useContext } from 'react';
import AuthContext from '../Providers/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;
