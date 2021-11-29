import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Damian'
      }
    };
    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath, { replace: true });
  };


  return (
    <div className="container">
      <h1>Login Screen</h1>
      <hr/>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};