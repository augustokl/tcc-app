import { EquipmentTypes } from './types';

export function getDataRequest() {
  return {
    type: EquipmentTypes.requestData,
  };
}

export function getDataSuccess(data: EquipmentTypes) {
  return {
    type: EquipmentTypes.successData,
    payload: { data },
  };
}

export function equipmentError() {
  return {
    type: EquipmentTypes.error,
  };
}
