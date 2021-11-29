import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        login: true
      };

    case types.logout:
      return {
        login: false
      };

    default:
      return state;
  }
};