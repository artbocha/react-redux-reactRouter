import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import { loadState, saveState } from './localStorage';

const sagaMiddleware = createSagaMiddleware();

const initialState = loadState();

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducers, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    username: store.getState().username
  });
});

sagaMiddleware.run(sagas);

export default store;
