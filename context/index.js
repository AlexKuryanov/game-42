import { createContext, useContext } from 'react';

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export const StateContext = createContext({});
export const useStateContext = () => useContext(StateContext);