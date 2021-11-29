import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();


  localStorage.setItem('lastPath', (pathname + search).trim());

  return user.login
    ? children
    : <Navigate to={'/login'}/>;
};