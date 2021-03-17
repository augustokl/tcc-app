import IDataFormat from './dtos/IDataFormat';
import { EquipamentTypes } from './types';

export function getDataRequest() {
  return {
    type: EquipamentTypes.requestData,
  };
}

export function getDataSuccess(data: IDataFormat) {
  return {
    type: EquipamentTypes.successData,
    payload: { data },
  };
}

export function equipamentError() {
  return {
    type: EquipamentTypes.error,
  };
}
