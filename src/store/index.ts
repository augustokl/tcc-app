import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { EquipmentState } from './modules/equipment/types';
import { AutomaticConfState } from './modules/automaticConf/types';
import { ManualConfState } from './modules/manualConf/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface ApplicationState {
  equipment: EquipmentState;
  automaticConf: AutomaticConfState;
  manualConf: ManualConfState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
