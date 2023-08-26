import {ADDRESS_ACTION_TYPE} from '../ActionType/AddressActionType';
import {AddressService} from '../Service/AddresService';

export const AddressAction = {
  AddAdressAction,
  GetAdressAction,
  UPDATEAdressAction,
  DELETEAdressAction,
  AddSellerpickUpAddressAction,
  GetSelleraddressAction,
};

function AddAdressAction(Data) {
  return dispatch => {
    dispatch(request());
    return AddressService.AddAddressService(Data).then(
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
      type: ADDRESS_ACTION_TYPE.ADD_ADDRESS_REQUEST,
    };
  }
  function success(data) {
    return {type: ADDRESS_ACTION_TYPE.ADD_ADDRESS_SUCCESS, data};
  }
  function failure(error) {
    return {type: ADDRESS_ACTION_TYPE.ADD_ADDRESS_FAILURE, error};
  }
}

//--------------------------GET ADDERESS ------------------------------//
function GetAdressAction(Data, param) {
  return dispatch => {
    dispatch(request());
    return AddressService.GetAddressService(Data, param).then(
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
      type: ADDRESS_ACTION_TYPE.GET_ADDRESS_REQUEST,
    };
  }
  function success(data) {
    return {type: ADDRESS_ACTION_TYPE.GET_ADDRESS_SUCCESS, data};
  }
  function failure(error) {
    return {type: ADDRESS_ACTION_TYPE.GET_ADDRESS_FAILURE, error};
  }
}

//--------------------------DELETE ADDERESS ------------------------------//
function DELETEAdressAction(Data) {
  return dispatch => {
    dispatch(request());
    return AddressService.DELETEAddressService(Data).then(
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
      type: ADDRESS_ACTION_TYPE.DELETE_ADDRESS_REQUEST,
    };
  }
  function success(data) {
    return {type: ADDRESS_ACTION_TYPE.DELETE_ADDRESS_SUCCESS, data};
  }
  function failure(error) {
    return {type: ADDRESS_ACTION_TYPE.DELETE_ADDRESS_FAILURE, error};
  }
}

//--------------------------UPDATE ADDERESS ------------------------------//
function UPDATEAdressAction(Data) {
  return dispatch => {
    dispatch(request());
    return AddressService.UPDATEAddressService(Data).then(
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
      type: ADDRESS_ACTION_TYPE.UPDATE_ADDRESS_REQUEST,
    };
  }
  function success(data) {
    return {type: ADDRESS_ACTION_TYPE.UPDATE_ADDRESS_SUCCESS, data};
  }
  function failure(error) {
    return {type: ADDRESS_ACTION_TYPE.UPDATE_ADDRESS_FAILURE, error};
  }
}

//------------------------------Add Seller PickUp Address ---------------------------//

function AddSellerpickUpAddressAction(Data) {
  return dispatch => {
    dispatch(request());
    return AddressService.AddSellerPickUpAddressService(Data).then(
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
      type: ADDRESS_ACTION_TYPE.ADD_SELLER_PICKUP_ADDRESS_REQUEST,
    };
  }
  function success(data) {
    return {type: ADDRESS_ACTION_TYPE.ADD_SELLER_PICKUP_ADDRESS_SUCCESS, data};
  }
  function failure(error) {
    return {type: ADDRESS_ACTION_TYPE.ADD_SELLER_PICKUP_ADDRESS_FAILURE, error};
  }
}

//----------------------- get seller address ------------------------------//

function GetSelleraddressAction(data) {
  return dispatch => {
    dispatch(request());
    return AddressService.GetSellerAddress(data).then(
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
      type: ADDRESS_ACTION_TYPE.GET_SELLER_ADDRESS_REQUEST,
    };
  }
  function success(data) {
    return {type: ADDRESS_ACTION_TYPE.GET_SELLER_ADDRESS_SUCCESS, data};
  }
  function failure(error) {
    return {type: ADDRESS_ACTION_TYPE.GET_SELLER_ADDRESS_FAILURE, error};
  }
}
