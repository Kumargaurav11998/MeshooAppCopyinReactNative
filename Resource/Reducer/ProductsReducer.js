import {PRODUCTS_ACTION_TYPE} from '../ActionType/ProductsActionType';

const initialState = {
  GetAllProducts: {},
  GetProductDeatils: {},
};
export function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_ACTION_TYPE.GET_ALL_PRODUCTS_REQUEST:
      return state;
    case PRODUCTS_ACTION_TYPE.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        GetAllProducts: {
          ...state.data,
          ...[action.data],
        },
      };
    case PRODUCTS_ACTION_TYPE.GET_ALL_PRODUCTS_FAILURE:
      return state;
    case PRODUCTS_ACTION_TYPE.GET_PRODUCTS_DETAILS_REQUEST:
      return state;
    case PRODUCTS_ACTION_TYPE.GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        ...state,
        GetProductDeatils: {
          ...state.data,
          ...[action.data],
        },
      };

    case PRODUCTS_ACTION_TYPE.GET_PRODUCTS_DETAILS_FAILURE:
      return state;
    default:
      return state;
  }
}
