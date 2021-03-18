import { all, takeLatest, put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../../config/api';

import { AutomaticConfTypes, AutomaticConf } from './types';

import {
  getAutomaticConfSuccess,
  updateAutomaticConfSuccess,
  automaticConfError,
} from './actions';

interface Action {
  type: AutomaticConfTypes;
  payload: AutomaticConf;
}

function* getConf() {
  try {
    const { data } = yield call(api.get, 'automatic-conf');

    yield put(getAutomaticConfSuccess(data));
  } catch (err) {
    console.log(err.message);
    yield put(automaticConfError());
  }
}

function* updateConf({ payload }: Action) {
  try {
    const response: AxiosResponse = yield call(
      api.put,
      'automatic-conf',
      payload,
    );

    if (response.status !== 200) {
      throw new Error();
    }

    yield put(updateAutomaticConfSuccess(response.data));
  } catch (err) {
    console.log(err.message);
    yield put(automaticConfError());
  }
}

export default all([
  takeLatest(AutomaticConfTypes.requestConf, getConf),
  takeLatest(AutomaticConfTypes.requestUpdateConf, updateConf),
]);
