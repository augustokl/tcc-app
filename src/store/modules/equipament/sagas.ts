import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../config/api';

import { equipmentTypes } from './types';
import { getDataSuccess, equipmentError } from './actions';

function* getequipmentData() {
  try {
    const { data } = yield call(api.get, 'equipments');

    yield put(getDataSuccess(data));
  } catch (err) {
    yield put(equipmentError());
  }
}

export default all([takeLatest(equipmentTypes.requestData, getequipmentData)]);
