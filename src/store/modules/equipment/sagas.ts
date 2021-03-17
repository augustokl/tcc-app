import { all, takeLatest, put, call } from 'redux-saga/effects';
import api from '../../../config/api';

import { EquipmentTypes } from './types';
import { getDataSuccess, equipmentError } from './actions';

function* getEquipmentData() {
  try {
    const { data } = yield call(api.get, 'equipments');

    yield put(getDataSuccess(data));
  } catch (err) {
    console.log(err.message);
    yield put(equipmentError());
  }
}

export default all([takeLatest(EquipmentTypes.requestData, getEquipmentData)]);
