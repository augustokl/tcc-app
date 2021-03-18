import { all, takeLatest, put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../../config/api';

import { ManualConfTypes, ManualConf } from './types';

import {
  getManualConfSuccess,
  updateManualConfSuccess,
  manualConfError,
} from './actions';

interface Action {
  type: ManualConfTypes;
  payload: ManualConf;
}

function* getConf() {
  try {
    const { data } = yield call(api.get, 'manual-conf');

    yield put(getManualConfSuccess(data));
  } catch (err) {
    console.log(err.message);
    yield put(manualConfError());
  }
}

function* updateConf({ payload }: Action) {
  try {
    const response: AxiosResponse = yield call(api.put, 'manual-conf', payload);

    if (response.status !== 200) {
      throw new Error();
    }

    yield put(updateManualConfSuccess(response.data));
  } catch (err) {
    console.log(err.message);
    yield put(manualConfError());
  }
}

export default all([
  takeLatest(ManualConfTypes.requestConf, getConf),
  takeLatest(ManualConfTypes.requestUpdateConf, updateConf),
]);
