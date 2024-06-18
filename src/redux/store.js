import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import trackReducer from './reducers/trackReducer';

const rootReducer = combineReducers({
  tracks: trackReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;