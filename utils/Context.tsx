import React, { createContext, useReducer, Dispatch } from 'react';
import { reducer, ActionTypes, State } from './reducers';

const initialState = {
  doctor: '',
  doctors: [],
  location: '',
  locations: [],
  searchType: undefined,
};

const AppContext = createContext<{
  state: State;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
