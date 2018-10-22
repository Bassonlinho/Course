import thunk from 'redux-thunk';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import * as reducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const finalCreateStore = composeWithDevTools(compose(applyMiddleware(thunk)))(createStore);
const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

export default store;