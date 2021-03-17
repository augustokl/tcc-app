import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../config/api';

import { EquipamentTypes } from './types';
import { getDataSuccess, equipamentError } from './actions';

function* getEquipamentData() {
  try {
    const { data } = yield call(api.get, 'equipaments');

    yield put(getDataSuccess(data));
  } catch (err) {
    yield put(equipamentError());
  }
}

export default all([
  takeLatest(EquipamentTypes.requestData, getEquipamentData),
]);
