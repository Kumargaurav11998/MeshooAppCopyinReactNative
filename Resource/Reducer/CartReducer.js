import {CART_ACTION_TYPE} from '../ActionType/CartActionType';

const initialState = {
  DispachedCartData: {},
};
export function CartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ACTION_TYPE.DISPATCH_CART_DATA_REQUEST:
      return state;
    case CART_ACTION_TYPE.DISPATCH_CART_DATA_SUCCESS:
      return {
        ...state,
        DispachedCartData: {
          ...state.data,
          ...action.data,
        },
      };
    case CART_ACTION_TYPE.DISPATCH_CART_DATA_FAILURE:
      return state;

    default:
      return state;
  }
}
