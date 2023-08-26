import {SELLER_ACTION_TYPE} from '../ActionType/SellerActionType';

const initialState = {
  SellerId: {},
};
export function SellerReducer(state = initialState, action) {
  switch (action.type) {
    case SELLER_ACTION_TYPE.GET_SELLER_ID_REQUEST:
      return state;
    case SELLER_ACTION_TYPE.GET_SELLER_ID_SUCCESS:
      return {
        ...state,
        SellerId: {
          ...state.data,
          ...[action.data],
        },
      };
    case SELLER_ACTION_TYPE.GET_SELLER_ID_FAILURE:
      return state;

    default:
      return state;
  }
}
