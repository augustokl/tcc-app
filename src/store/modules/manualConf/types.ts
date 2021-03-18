export enum ManualConfTypes {
  requestConf = '@manualConf/CONF_REQUEST',
  successConf = '@manualConf/CONF_SUCCESS',
  requestUpdateConf = '@manualConf/CONF_UPDATE_REQUEST',
  successUpdateConf = '@manualConf/CONF_UPDATE_SUCCESS',
  error = '@manualConf/ERROR',
}

export interface ManualConf {
  active: boolean;
  fan: boolean;
  humidity: boolean;
  temperature: boolean;
}

export interface ManualConfState {
  readonly data: ManualConf;
  readonly loading: boolean;
  readonly error: boolean;
}
