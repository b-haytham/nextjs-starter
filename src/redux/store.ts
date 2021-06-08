import {useMemo} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware, {ThunkMiddleware} from 'redux-thunk';

import rootReducer from './rootReducer';

let store: any;

function initStore(initialState: AppState) {
  return createStore(
    rootReducer,
    initialState,
  );
}

export const initializeStore = (preloadedState: AppState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  let currentState = store.getState();
  store.subscribe(() => {
    // keep track of the previous and current state to compare changesAppLayout/index.j
    let previousState = currentState;
    currentState = store.getState();
    // if the token changes set the value in localStorage and axios headers
  });
  return _store;
};

export function useStore(initialState: AppState) {
  return useMemo(() => initializeStore(initialState), [initialState]);

}

export type AppState = ReturnType<typeof rootReducer>;
