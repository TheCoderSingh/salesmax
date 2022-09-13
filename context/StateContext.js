import { createContext, useContext } from 'react';

export const StateContext = createContext();

export default StateContext;

export const useStateContext = () => useContext(StateContext);
