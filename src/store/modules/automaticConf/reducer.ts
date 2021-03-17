import { Reducer } from 'redux';
import produce from 'immer';
import { AutomaticConf, AutomaticConfState, AutomaticConfTypes } from './types';

const INITIAL_STATE: AutomaticConfState = {
  data: {} as AutomaticConf,
  loading: false,
  error: false,
};

const reducer: Reducer<AutomaticConfState> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case AutomaticConfTypes.requestConf: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case AutomaticConfTypes.successConf: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case AutomaticConfTypes.requestUpdateConf: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case AutomaticConfTypes.successUpdateConf: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case AutomaticConfTypes.error: {
        draft.error = true;
        draft.loading = false;
        break;
      }
    }
  });
};

export default reducer;
