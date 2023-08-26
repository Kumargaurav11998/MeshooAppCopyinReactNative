import {SEARCH_ACTION_TYPE} from '../ActionType/SearchActionType';
import {SearchService} from '../Service/SearchService';

export const SearchAction = {
  GetProductBySearch,
};

function GetProductBySearch(data) {
  return dispatch => {
    dispatch(request());
    return SearchService.GetSearchSearch(data).then(
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
      type: SEARCH_ACTION_TYPE.SEARCH_REQUEST,
    };
  }
  function success(data) {
    return {type: SEARCH_ACTION_TYPE.SEARCH_SUCCESS, data};
  }
  function failure(error) {
    return {type: SEARCH_ACTION_TYPE.SEARCH_FAILURE, error};
  }
}
