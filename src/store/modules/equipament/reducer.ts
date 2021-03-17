import { Reducer } from 'redux';
import produce from 'immer';
import { EquipamentTypes, EquipamentState, Equipament } from './types';

const INITIAL_STATE: EquipamentState = {
  data: {} as Equipament,
  loading: false,
  error: false,
};

const reducer: Reducer<EquipamentState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case EquipamentTypes.requestData: {
        draft.loading = true;
        draft.error = false;
        break;
      }
      case EquipamentTypes.successData: {
        draft.loading = false;
        draft.data = action.payload.data;
        break;
      }
      case EquipamentTypes.error: {
        draft.error = true;
        draft.loading = false;
        break;
      }
    }
  });
};

export default reducer;
