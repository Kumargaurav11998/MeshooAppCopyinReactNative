import {GO_SWIFT_ACTION_TYPE} from '../ActionType/GoSwiftActionType';
import {GoSwiftService} from '../Service/GoSwiftService';

export const Go_Swift_Action = {
  GetAccessTokenAction,
  AddPickUpGoSwiftAddressAction,
  CreateOrderGo_Swift_Action,
  Check_Pincode_Go_Swift_Action,
  Track_Order_Go_Swift_Action,
  Cancel_Order_Go_Swift_Action,
};

function GetAccessTokenAction(data) {
  return dispatch => {
    dispatch(request());
    return GoSwiftService.GetAccessCode(data).then(
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
      type: GO_SWIFT_ACTION_TYPE.GET_ACCESS_TOKEN_REQUEST,
    };
  }
  function success(data) {
    return {type: GO_SWIFT_ACTION_TYPE.GET_ACCESS_TOKEN_SUCCESS, data};
  }
  function failure(error) {
    return {type: GO_SWIFT_ACTION_TYPE.GET_ACCESS_TOKEN_FAILURE, error};
  }
}

//-------------------------------------- add pick up go swift address -----------------------//

function AddPickUpGoSwiftAddressAction(data, token) {
  return dispatch => {
    dispatch(request());
    return GoSwiftService.AddPickUpaddressGoSwift(data, token).then(
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
      type: GO_SWIFT_ACTION_TYPE.ADD_PICKUP_ADDRESS_TO_GOSWIFT_REQUEST,
    };
  }
  function success(data) {
    return {
      type: GO_SWIFT_ACTION_TYPE.ADD_PICKUP_ADDRESS_TO_GOSWIFT_SUCCESS,
      data,
    };
  }
  function failure(error) {
    return {
      type: GO_SWIFT_ACTION_TYPE.ADD_PICKUP_ADDRESS_TO_GOSWIFT_FAILURE,
      error,
    };
  }
}

//-------------------------------------- add pick up go swift address -----------------------//

function CreateOrderGo_Swift_Action(data, token) {
  return dispatch => {
    dispatch(request());
    return GoSwiftService.CreateOrderGo_Swift_Service(data, token).then(
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
      type: GO_SWIFT_ACTION_TYPE.CREATE_NEW_ORDER_GO_SWIFT_REQUEST,
    };
  }
  function success(data) {
    return {
      type: GO_SWIFT_ACTION_TYPE.CREATE_NEW_ORDER_GO_SWIFT_SUCCESS,
      data,
    };
  }
  function failure(error) {
    return {
      type: GO_SWIFT_ACTION_TYPE.CREATE_NEW_ORDER_GO_SWIFT_FAILURE,
      error,
    };
  }
}

//-------------------------------------- Track up go swift address -----------------------//

function Track_Order_Go_Swift_Action(data) {
  return dispatch => {
    dispatch(request());
    return GoSwiftService.Track_OrderGo_Swift_Service(data).then(
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
      type: GO_SWIFT_ACTION_TYPE.TRACK_ORDER_GO_SWIFT_REQUEST,
    };
  }
  function success(data) {
    return {
      type: GO_SWIFT_ACTION_TYPE.TRACK_ORDER_GO_SWIFT_SUCCESS,
      data,
    };
  }
  function failure(error) {
    return {
      type: GO_SWIFT_ACTION_TYPE.TRACK_ORDER_GO_SWIFT_FAILURE,
      error,
    };
  }
}

//-------------------------------------- cHECK pincode  go swift address -----------------------//

function Check_Pincode_Go_Swift_Action(data, token) {
  console.log(data, '-----------');
  return dispatch => {
    dispatch(request());
    return GoSwiftService.Check_pincode_Go_Swift_Service(data, token).then(
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
      type: GO_SWIFT_ACTION_TYPE.CHECK_PINCODE_GO_SWIFT_REQUEST,
    };
  }
  function success(data) {
    return {
      type: GO_SWIFT_ACTION_TYPE.CHECK_PINCODE_GO_SWIFT_SUCCESS,
      data,
    };
  }
  function failure(error) {
    return {
      type: GO_SWIFT_ACTION_TYPE.CHECK_PINCODE_GO_SWIFT_FAILURE,
      error,
    };
  }
}

//--------------------------------------Cancel order go swift address -----------------------//

function Cancel_Order_Go_Swift_Action(data, token) {
  return dispatch => {
    dispatch(request());
    return GoSwiftService.Order_Cancel_Go_Swift_Service(data, token).then(
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
      type: GO_SWIFT_ACTION_TYPE.ORDER_CANCEL_GO_SWIFT_REQUEST,
    };
  }
  function success(data) {
    return {
      type: GO_SWIFT_ACTION_TYPE.ORDER_CANCEL_GO_SWIFT_SUCCESS,
      data,
    };
  }
  function failure(error) {
    return {
      type: GO_SWIFT_ACTION_TYPE.ORDER_CANCEL_GO_SWIFT_FAILURE,
      error,
    };
  }
}
