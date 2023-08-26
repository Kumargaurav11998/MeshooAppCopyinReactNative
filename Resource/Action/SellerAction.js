import {SELLER_ACTION_TYPE} from '../ActionType/SellerActionType';
import {SellerService} from '../Service/SellerService';

export const SellerAction = {
  GetSellerId,
};

function GetSellerId(data) {
  return dispatch => {
    dispatch(request());
    return SellerService.GetSellerId(data).then(
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
      type: SELLER_ACTION_TYPE.GET_SELLER_ID_REQUEST,
    };
  }
  function success(data) {
    return {type: SELLER_ACTION_TYPE.GET_SELLER_ID_SUCCESS, data};
  }
  function failure(error) {
    return {type: SELLER_ACTION_TYPE.GET_SELLER_ID_FAILURE, error};
  }
}
