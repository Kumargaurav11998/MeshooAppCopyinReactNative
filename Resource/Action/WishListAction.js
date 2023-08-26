import {WISH_LIST_ACTION_TYPE} from '../ActionType/WishListActionType';
import {WishListService} from '../Service/WishListService';

export const WishListAction = {
  AddWishListAction,
  GetWishListAction,
  RemoveWishListAction,
  CheckWishListAction,
};

function AddWishListAction(user_id, product_id) {
  return dispatch => {
    dispatch(request());
    return WishListService.AddWishListService(user_id, product_id).then(
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
      type: WISH_LIST_ACTION_TYPE.ADD_WISH_LIST_REQUEST,
    };
  }
  function success(data) {
    return {type: WISH_LIST_ACTION_TYPE.ADD_WISH_LIST_SUCCESS, data};
  }
  function failure(error) {
    return {type: WISH_LIST_ACTION_TYPE.ADD_WISH_LIST_FAILURE, error};
  }
}

// Get wishlist

function GetWishListAction(user_id) {
  return dispatch => {
    dispatch(request());
    return WishListService.GetWishListService(user_id).then(
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
      type: WISH_LIST_ACTION_TYPE.GET_WISH_LIST_REQUEST,
    };
  }
  function success(data) {
    return {type: WISH_LIST_ACTION_TYPE.GET_WISH_LIST_SUCCESS, data};
  }
  function failure(error) {
    return {type: WISH_LIST_ACTION_TYPE.GET_WISH_LIST_FAILURE, error};
  }
}

// remove
function RemoveWishListAction(user_id, product_id) {
  return dispatch => {
    dispatch(request());
    return WishListService.RemoveWishListService(user_id, product_id).then(
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
      type: WISH_LIST_ACTION_TYPE.REMOVE_WISH_LIST_REQUEST,
    };
  }
  function success(data) {
    return {type: WISH_LIST_ACTION_TYPE.REMOVE_WISH_LIST_SUCCESS, data};
  }
  function failure(error) {
    return {type: WISH_LIST_ACTION_TYPE.REMOVE_WISH_LIST_FAILURE, error};
  }
}

// check wishlist

function CheckWishListAction(user_id, product_id) {
  return dispatch => {
    dispatch(request());
    return WishListService.CheckWishListService(user_id, product_id).then(
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
      type: WISH_LIST_ACTION_TYPE.CHECK_WISH_LIST_REQUEST,
    };
  }
  function success(data) {
    return {type: WISH_LIST_ACTION_TYPE.CHECK_WISH_LIST_SUCCESS, data};
  }
  function failure(error) {
    return {type: WISH_LIST_ACTION_TYPE.CHECK_WISH_LIST_FAILURE, error};
  }
}
