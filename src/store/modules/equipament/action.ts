import IDataFormat from './dtos/IDataFormat';
import Types from './types';

export function getDataRequest() {
  return {
    type: Types.requestData,
  };
}

export function getDataSuccess(data: IDataFormat) {
  return {
    type: Types.successData,
    payload: { data },
  };
}

export function error(error: string) {
  return {
    type: Types.error,
    payload: { error },
  };
}
