import IDataFormat from './dtos/IDataFormat';
import { equipmentTypes } from './types';

export function getDataRequest() {
  return {
    type: equipmentTypes.requestData,
  };
}

export function getDataSuccess(data: IDataFormat) {
  return {
    type: equipmentTypes.successData,
    payload: { data },
  };
}

export function equipmentError() {
  return {
    type: equipmentTypes.error,
  };
}
