import {AUTH_ACTION_TYPE} from '../ActionType/AuthActionType';

const initialState = {
  Login: {},
};
export function Authreducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION_TYPE.LOGIN_REQUEST:
      return state;
    case AUTH_ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        Login: {
          ...state.data,
          ...[action.data],
        },
      };
    case AUTH_ACTION_TYPE.LOGIN_FAILURE:
      return state;

    default:
      return state;
  }
}
