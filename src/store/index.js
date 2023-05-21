import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import postReducer from './postReducer';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  postReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

