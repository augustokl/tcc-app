export enum EquipamentTypes {
  requestData = '@equipament/DATA_REQUEST',
  successData = '@equipament/DATA_SUCCESS',
  error = '@equipament/ERROR',
}

export interface Equipament {
  id: number;
  fan: boolean;
  humidity: number;
  temperature: number;
}

export interface EquipamentState {
  readonly data: Equipament;
  readonly loading: boolean;
  readonly error: boolean;
}
