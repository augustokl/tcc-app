export enum AutomaticConfTypes {
  requestConf = '@automaticConf/CONF_REQUEST',
  successConf = '@automaticConf/CONF_SUCCESS',
  requestUpdateConf = '@automaticConf/CONF_UPDATE_REQUEST',
  successUpdateConf = '@automaticConf/CONF_UPDATE_SUCCESS',
  error = '@automaticConf/ERROR',
}

export interface AutomaticConf {
  min_humidity: number;
  max_humidity: number;
  min_temperature: number;
  max_temperature: number;
  activation_time: number;
  close_sombrite: Date;
  open_sombrite: Date;
}

export interface AutomaticConfState {
  readonly data: AutomaticConf;
  readonly loading: boolean;
  readonly error: boolean;
}
