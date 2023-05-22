import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import postReducer from './postReducer';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from '../saga';
import userReducer from './userReducer';
import commentReducer from './commentReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  postReducer,
  userReducer,
  commentReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

