import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../src/reducers/index.js';

export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../src/reducers/index.js').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
