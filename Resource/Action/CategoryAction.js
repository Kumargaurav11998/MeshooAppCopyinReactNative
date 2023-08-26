import {CATEGORY_ACTION_TYPE} from '../ActionType/CategoryActionType';
import {CategoryService} from '../Service/CategoryService';

export const CategoryAction = {
  GetCategoryAction,
  GetSubCategoryAction,
};

function GetCategoryAction(data) {
  return dispatch => {
    dispatch(request());
    return CategoryService.GetGetgoryService(data).then(
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
      type: CATEGORY_ACTION_TYPE.GET_CATEGORY_REQUEST,
    };
  }
  function success(data) {
    return {type: CATEGORY_ACTION_TYPE.GET_CATEGORY_SUCCESS, data};
  }
  function failure(error) {
    return {type: CATEGORY_ACTION_TYPE.GET_CATEGORY_FAILURE, error};
  }
}

//--------------------GET SUB CATEGORY ------------------------//

function GetSubCategoryAction(data) {
  return dispatch => {
    dispatch(request());
    return CategoryService.GetSubgoryService(data).then(
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
      type: CATEGORY_ACTION_TYPE.GET_SUB_CATEGORY_REQUEST,
    };
  }
  function success(data) {
    return {type: CATEGORY_ACTION_TYPE.GET__SUB_CATEGORY_SUCCESS, data};
  }
  function failure(error) {
    return {type: CATEGORY_ACTION_TYPE.GET_SUB_CATEGORY_FAILURE, error};
  }
}
