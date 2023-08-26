import {CATEGORY_ACTION_TYPE} from '../ActionType/CategoryActionType';

const initialState = {
  GetCategoryList: {},
};
export function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_ACTION_TYPE.GET_CATEGORY_REQUEST:
      return state;
    case CATEGORY_ACTION_TYPE.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        GetCategoryList: {
          ...state.data,
          ...[action.data],
        },
      };
    case CATEGORY_ACTION_TYPE.GET_CATEGORY_FAILURE:
      return state;

    default:
      return state;
  }
}
