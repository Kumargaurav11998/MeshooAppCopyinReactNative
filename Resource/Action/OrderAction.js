import {CATEGORY_ACTION_TYPE} from '../ActionType/CategoryActionType';
import {ORDER_ACTION_TYPE} from '../ActionType/OrderActionType';
import {CategoryService} from '../Service/CategoryService';
import {OrderService} from '../Service/OrderService';

export const OrderAction = {
  OrderPlacedAction,
  GetOrderlistAction,
  GetOrderDeatislAction,
  CancelOrderAction,
};

function OrderPlacedAction(data) {
  return dispatch => {
    dispatch(request());
    return OrderService.PostOrderSevice(data).then(
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
      type: ORDER_ACTION_TYPE.ORDER_PLACED_REQUEST,
    };
  }
  function success(data) {
    return {type: ORDER_ACTION_TYPE.ORDER_PLACED_SUCCESS, data};
  }
  function failure(error) {
    return {type: ORDER_ACTION_TYPE.ORDER_PLACED_FAILURE, error};
  }
}

//--------------------------------Get ORder List -------------------------------//

function GetOrderlistAction(data) {
  return dispatch => {
    dispatch(request());
    return OrderService.GetOrderSevice(data).then(
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
      type: ORDER_ACTION_TYPE.GET_ORDER_LIST_REQUEST,
    };
  }
  function success(data) {
    return {type: ORDER_ACTION_TYPE.GET_ORDER_LIST_SUCCESS, data};
  }
  function failure(error) {
    return {type: ORDER_ACTION_TYPE.GET_ORDER_LIST_FAILURE, error};
  }
}

//--------------------------------Get ORder Details -------------------------------//

function GetOrderDeatislAction(data) {
  return dispatch => {
    dispatch(request());
    return OrderService.GetOrderDsetailsSevice(data).then(
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
      type: ORDER_ACTION_TYPE.GET_ORDER_DETAILS_REQUEST,
    };
  }
  function success(data) {
    return {type: ORDER_ACTION_TYPE.GET_ORDER_DETAILS_SUCCESS, data};
  }
  function failure(error) {
    return {type: ORDER_ACTION_TYPE.GET_ORDER_DETAILS_SUCCESS, error};
  }
}

//-------------------------------------------Cancel Order Details ------------------------//

function CancelOrderAction(data) {
  return dispatch => {
    dispatch(request());
    return OrderService.CancelOrderSevice(data).then(
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
      type: ORDER_ACTION_TYPE.CANCEL_ORDER_PLACED_REQUEST,
    };
  }
  function success(data) {
    return {type: ORDER_ACTION_TYPE.CANCEL_ORDER_PLACED_SUCCESS, data};
  }
  function failure(error) {
    return {type: ORDER_ACTION_TYPE.CANCEL_ORDER_PLACED_FAILURE, error};
  }
}

//------------------------------Add Seller PickUp Address ---------------------------//
