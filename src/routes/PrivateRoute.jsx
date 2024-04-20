import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {loader, user} = useContext(AuthContext);
  const location = useLocation()
  if(loader){
    return <LoadingSpinner></LoadingSpinner>
  }
  if(user){
    return children
  }
  return <Navigate to='/login' state={{from : location}}></Navigate>
};

export default PrivateRoute;