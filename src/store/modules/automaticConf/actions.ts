import { AutomaticConfTypes, AutomaticConf } from './types';

export function getAutomaticConfRequest() {
  return {
    type: AutomaticConfTypes.requestConf,
  };
}

export function getAutomaticConfSuccess(data: AutomaticConf) {
  return {
    type: AutomaticConfTypes.successConf,
    payload: { data },
  };
}

export function updateAutomaticConfRequest(data: AutomaticConf) {
  return {
    type: AutomaticConfTypes.requestUpdateConf,
    payload: data,
  };
}

export function updateAutomaticConfSuccess(data: AutomaticConf) {
  return {
    type: AutomaticConfTypes.successUpdateConf,
    payload: { data },
  };
}

export function automaticConfError() {
  return {
    type: AutomaticConfTypes.error,
  };
}
