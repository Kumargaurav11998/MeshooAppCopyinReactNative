import {CART_ACTION_TYPE} from '../ActionType/CartActionType';
import {CartService} from '../Service/CartService';

export const CartAction = {
  DispatchAction,
  AddToCartAction,
  GetToCartAction,
  RemoveFromCartAction,
};
function DispatchAction(data) {
  return dispatch => {
    dispatch(request());
    dispatch(success(data));
  };
  function request() {
    return {
      type: CART_ACTION_TYPE.DISPATCH_CART_DATA_REQUEST,
    };
  }
  function success(data) {
    return {type: CART_ACTION_TYPE.DISPATCH_CART_DATA_SUCCESS, data};
  }
  function failure(error) {
    return {type: CART_ACTION_TYPE.DISPATCH_CART_DATA_FAILURE, error};
  }
}

//---------------------------------Add To Cart--------------------------

function AddToCartAction(data) {
  return dispatch => {
    dispatch(request());
    return CartService.AddToCartService(data).then(
      response => {
        dispatch(success(response));
        return Promise.resolve(response);
      },
      error => {
        dispatch(failure(error));
        return Promise.reject();
      },
    );
  };
  function request() {
    return {
      type: CART_ACTION_TYPE.ADD_TO_CART_REQUEST,
    };
  }
  function success(data) {
    return {type: CART_ACTION_TYPE.ADD_TO_CART_SUCCESS, data};
  }
  function failure(error) {
    return {type: CART_ACTION_TYPE.ADD_TO_CART_FAILURE, error};
  }
}

//---------------------------------get To Cart--------------------------

function GetToCartAction(data) {
  return dispatch => {
    dispatch(request());
    return CartService.GetToCartService(data).then(
      response => {
        dispatch(success(response));
        return Promise.resolve(response);
      },
      error => {
        dispatch(failure(error));
        return Promise.reject();
      },
    );
  };
  function request() {
    return {
      type: CART_ACTION_TYPE.GET_TO_CART_REQUEST,
    };
  }
  function success(data) {
    return {type: CART_ACTION_TYPE.GET_TO_CART_SUCCESS, data};
  }
  function failure(error) {
    return {type: CART_ACTION_TYPE.GET_TO_CART_FAILURE, error};
  }
}

//---------------------------------Remove From Cart--------------------------

function RemoveFromCartAction(userid, productid) {
  return dispatch => {
    dispatch(request());
    return CartService.RemoveFromCartService(userid, productid).then(
      response => {
        dispatch(success(response));
        return Promise.resolve(response);
      },
      error => {
        dispatch(failure(error));
        return Promise.reject();
      },
    );
  };
  function request() {
    return {
      type: CART_ACTION_TYPE.REMOVE_FROM_CART_REQUEST,
    };
  }
  function success(data) {
    return {type: CART_ACTION_TYPE.REMOVE_FROM_CART_SUCCESS, data};
  }
  function failure(error) {
    return {type: CART_ACTION_TYPE.REMOVE_FROM_CART_FAILURE, error};
  }
}
