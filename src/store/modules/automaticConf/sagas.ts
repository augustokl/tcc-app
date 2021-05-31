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

    const { open_sombrite, close_sombrite } = data;

    const dateOpenSombrite: string[] = open_sombrite.split(':')
    const openDate = new Date()
    const dateCloseSombrite: string[] = close_sombrite.split(':')
    const closeDate = new Date()

    openDate.setHours(Number(dateOpenSombrite[0]))
    openDate.setMinutes(Number(dateOpenSombrite[1]))
    closeDate.setHours(Number(dateCloseSombrite[0]))
    closeDate.setMinutes(Number(dateCloseSombrite[1]))

    data.open_sombrite = openDate;
    data.close_sombrite = closeDate;

    yield put(getAutomaticConfSuccess(data));
  } catch (err) {
    console.log(err.message);
    yield put(automaticConfError());
  }
}

function* updateConf({ payload }: Action) {
  try {
    const {data, status}: AxiosResponse = yield call(
      api.put,
      'automatic-conf',
      payload,
    );

    if (status !== 200) {
      throw new Error();
    }

    const { open_sombrite, close_sombrite } = data;

    const dateOpenSombrite: string[] = open_sombrite.split(':')
    const openDate = new Date()
    const dateCloseSombrite: string[] = close_sombrite.split(':')
    const closeDate = new Date()

    openDate.setHours(Number(dateOpenSombrite[0]))
    openDate.setMinutes(Number(dateOpenSombrite[1]))
    closeDate.setHours(Number(dateCloseSombrite[0]))
    closeDate.setMinutes(Number(dateCloseSombrite[1]))

    data.open_sombrite = openDate;
    data.close_sombrite = closeDate;

    yield put(updateAutomaticConfSuccess(data));
  } catch (err) {
    console.log(err.message);
    yield put(automaticConfError());
  }
}

export default all([
  takeLatest(AutomaticConfTypes.requestConf, getConf),
  takeLatest(AutomaticConfTypes.requestUpdateConf, updateConf),
]);
