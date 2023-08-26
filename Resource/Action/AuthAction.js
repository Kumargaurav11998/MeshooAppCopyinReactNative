import {AUTH_ACTION_TYPE} from '../ActionType/AuthActionType';
import {AuthService} from '../Service/AuthService';

export const AuthAction = {
  LoginAction,
  CreateSellerAccountAction,
};

function LoginAction(mobile, date) {
  return dispatch => {
    dispatch(request());
    return AuthService.LoginService(mobile, date).then(
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
      type: AUTH_ACTION_TYPE.LOGIN_REQUEST,
    };
  }
  function success(data) {
    return {type: AUTH_ACTION_TYPE.LOGIN_SUCCESS, data};
  }
  function failure(error) {
    return {type: AUTH_ACTION_TYPE.LOGIN_FAILURE, error};
  }
}

//-----------------------------CREATE sELLER aCCOUNT ------------------------------//

function CreateSellerAccountAction(data) {
  return dispatch => {
    dispatch(request());
    return AuthService.CreateSellerAccountService(data).then(
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
      type: AUTH_ACTION_TYPE.CREATE_SELLER_ACCOUNT_REQUEST,
    };
  }
  function success(data) {
    return {type: AUTH_ACTION_TYPE.CREATE_SELLER_ACCOUNT_SUCCESS, data};
  }
  function failure(error) {
    return {type: AUTH_ACTION_TYPE.CREATE_SELLER_ACCOUNT_FAILURE, error};
  }
}
