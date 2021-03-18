import { Reducer } from 'redux';
import produce from 'immer';
import { ManualConf, ManualConfState, ManualConfTypes } from './types';

const INITIAL_STATE: ManualConfState = {
  data: {} as ManualConf,
  loading: false,
  error: false,
};

const reducer: Reducer<ManualConfState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ManualConfTypes.requestConf: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case ManualConfTypes.successConf: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case ManualConfTypes.requestUpdateConf: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case ManualConfTypes.successUpdateConf: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case ManualConfTypes.error: {
        draft.error = true;
        draft.loading = false;
        break;
      }
    }
  });
};

export default reducer;
