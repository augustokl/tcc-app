import { ManualConfTypes, ManualConf } from './types';

export function getManualConfRequest() {
  return {
    type: ManualConfTypes.requestConf,
  };
}

export function getManualConfSuccess(data: ManualConf) {
  return {
    type: ManualConfTypes.successConf,
    payload: { data },
  };
}

export function updateManualConfRequest(data: ManualConf) {
  return {
    type: ManualConfTypes.requestUpdateConf,
    payload: data,
  };
}

export function updateManualConfSuccess(data: ManualConf) {
  return {
    type: ManualConfTypes.successUpdateConf,
    payload: data,
  };
}

export function automaticConfError() {
  return {
    type: ManualConfTypes.error,
  };
}
