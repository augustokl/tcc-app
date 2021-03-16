import produce from 'immer';
import Types from './types';

import IDataFormat from './dtos/IDataFormat';

interface IPayloadData {
  data: IDataFormat;
  error: string;
}

interface IEquipamentAction {
  type: string;
  payload: IPayloadData;
}

const INITIAL_STATE = {
  data: {} as IDataFormat,
  loading: false,
  err: '',
};

export default function equipament(
  state = INITIAL_STATE,
  action: IEquipamentAction,
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.requestData: {
        draft.loading = true;
        break;
      }
      case Types.successData: {
        draft.loading = false;
        draft.data = action.payload.data;
      }
      case Types.error: {
        draft.err = action.payload.error;
      }
    }
  });
}
