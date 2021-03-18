import { all } from 'redux-saga/effects';

import equipment from './equipment/sagas';
import automaticConf from './automaticConf/sagas';
import manualConf from './manualConf/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([equipment, automaticConf, manualConf]);
}
