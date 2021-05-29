export enum EquipmentTypes {
  requestData = '@equipment/DATA_REQUEST',
  successData = '@equipment/DATA_SUCCESS',
  error = '@equipment/ERROR',
}

export interface Equipment {
  id: number;
  fan: boolean;
  sombrite: boolean;
  heater: boolean;
  water_pump: boolean;
  humidity: number;
  temperature: number;
  uv: number;
  soil_humidity: number;
  water_flow: number;
}

export interface EquipmentState {
  readonly data: Equipment;
  readonly loading: boolean;
  readonly error: boolean;
}
