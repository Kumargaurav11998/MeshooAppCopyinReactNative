import {AUTH_ACTION_TYPE} from '../ActionType/AuthActionType';
import {GO_SWIFT_ACTION_TYPE} from '../ActionType/GoSwiftActionType';

const initialState = {
  GetAccesToken: {},
};
export function GoSwiftReducer(state = initialState, action) {
  switch (action.type) {
    case GO_SWIFT_ACTION_TYPE.GET_ACCESS_TOKEN_REQUEST:
      return state;
    case GO_SWIFT_ACTION_TYPE.GET_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        GetAccesToken: {
          ...state.data,
          ...[action.data],
        },
      };
    case GO_SWIFT_ACTION_TYPE.GET_ACCESS_TOKEN_FAILURE:
      return state;

    default:
      return state;
  }
}
