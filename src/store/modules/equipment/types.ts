export enum EquipmentTypes {
  requestData = '@equipment/DATA_REQUEST',
  successData = '@equipment/DATA_SUCCESS',
  error = '@equipment/ERROR',
}

export interface Equipment {
  id: number;
  fan: boolean;
  humidity: number;
  temperature: number;
}

export interface EquipmentState {
  readonly data: Equipment;
  readonly loading: boolean;
  readonly error: boolean;
}
