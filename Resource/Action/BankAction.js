import {BANK_ACTION_TYPE} from '../ActionType/BankActionType';
import {BankService} from '../Service/BankService';

export const BankAction = {
  AddBankAction,
  GeTBankDetailsAction,
  SaveSellerBankDetailsAction,
  GetSellerBankDetailsAction,
};

function AddBankAction(data) {
  return dispatch => {
    dispatch(request());
    return BankService.AddBankService(data).then(
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
      type: BANK_ACTION_TYPE.ADD_BANK_DETAILS_REQUEST,
    };
  }
  function success(data) {
    return {type: BANK_ACTION_TYPE.ADD_BANK_DETAILS_SUCCESS, data};
  }
  function failure(error) {
    return {type: BANK_ACTION_TYPE.ADD_BANK_DETAILS_FAILURE, error};
  }
}

//---------------------------GET BANK DETAILS --------------------------------//

function GeTBankDetailsAction(data) {
  return dispatch => {
    dispatch(request());
    return BankService.GetBankDeTAILSService(data).then(
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
      type: BANK_ACTION_TYPE.GET_BANK_DETAILS_REQUEST,
    };
  }
  function success(data) {
    return {type: BANK_ACTION_TYPE.GET_BANK_DETAILS_SUCCESS, data};
  }
  function failure(error) {
    return {type: BANK_ACTION_TYPE.GET_BANK_DETAILS_FAILURE, error};
  }
}

//--------------------------------- save seller bank d3etails ---------------------------//

function SaveSellerBankDetailsAction(data) {
  return dispatch => {
    dispatch(request());
    return BankService.AddSellerBankDetails(data).then(
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
      type: BANK_ACTION_TYPE.SELLER_ADD_BANK_DETAILS_REQUEST,
    };
  }
  function success(data) {
    return {type: BANK_ACTION_TYPE.SELLER_ADD_BANK_DETAILS_SUCCESS, data};
  }
  function failure(error) {
    return {type: BANK_ACTION_TYPE.SELLER_ADD_BANK_DETAILS_FAILURE, error};
  }
}

//--------------------------------- save seller bank d3etails ---------------------------//

function GetSellerBankDetailsAction(data) {
  return dispatch => {
    dispatch(request());
    return BankService.GetSellerBankDetails(data).then(
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
      type: BANK_ACTION_TYPE.SELLER_GET_BANK_DETAILS_FAILURE,
    };
  }
  function success(data) {
    return {type: BANK_ACTION_TYPE.SELLER_GET_BANK_DETAILS_SUCCESS, data};
  }
  function failure(error) {
    return {type: BANK_ACTION_TYPE.SELLER_GET_BANK_DETAILS_FAILURE, error};
  }
}
