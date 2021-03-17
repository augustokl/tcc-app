export enum equipmentTypes {
  requestData = '@equipment/DATA_REQUEST',
  successData = '@equipment/DATA_SUCCESS',
  error = '@equipment/ERROR',
}

export interface equipment {
  id: number;
  fan: boolean;
  humidity: number;
  temperature: number;
}

export interface equipmentState {
  readonly data: equipment;
  readonly loading: boolean;
  readonly error: boolean;
}
