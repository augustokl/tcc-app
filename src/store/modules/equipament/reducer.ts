import { Reducer } from 'redux';
import produce from 'immer';
import { equipmentTypes, equipmentState, equipment } from './types';

const INITIAL_STATE: equipmentState = {
  data: {} as equipment,
  loading: false,
  error: false,
};

const reducer: Reducer<equipmentState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case equipmentTypes.requestData: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case equipmentTypes.successData: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case equipmentTypes.error: {
        draft.error = true;
        draft.loading = false;
        break;
      }
    }
  });
};

export default reducer;
