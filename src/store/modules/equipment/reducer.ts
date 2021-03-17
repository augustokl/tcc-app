import { Reducer } from 'redux';
import produce from 'immer';
import { EquipmentTypes, EquipmentState, Equipment } from './types';

const INITIAL_STATE: EquipmentState = {
  data: {} as Equipment,
  loading: false,
  error: false,
};

const reducer: Reducer<EquipmentState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case EquipmentTypes.requestData: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case EquipmentTypes.successData: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case EquipmentTypes.error: {
        draft.error = true;
        draft.loading = false;
        break;
      }
    }
  });
};

export default reducer;
