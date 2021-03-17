import { all } from 'redux-saga/effects';

import equipament from './equipament/sagas';

export default function* rootSaga(): Generator<any> {
  return yield all([equipament]);
}
