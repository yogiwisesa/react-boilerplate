import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import SampleReducer from './sample/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      SampleReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};