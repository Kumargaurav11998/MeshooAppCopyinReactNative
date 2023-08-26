import {PRODUCTS_ACTION_TYPE} from '../ActionType/ProductsActionType';
import {ProductsService} from '../Service/ProductsService';

export const ProdcutAction = {
  GetAllProductsAction,
  GetproductDeatilsAction,
  GetproductThumNailsAction,
  GetproductReviewAction,
  GetSimmilerproductAction,
  GetProductByCategory,
  AddProductReviewAction,
};

function GetAllProductsAction(data) {
  return dispatch => {
    dispatch(request());
    return ProductsService.GetAllProductService(data).then(
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
      type: PRODUCTS_ACTION_TYPE.GET_ALL_PRODUCTS_REQUEST,
    };
  }
  function success(data) {
    return {type: PRODUCTS_ACTION_TYPE.GET_ALL_PRODUCTS_SUCCESS, data};
  }
  function failure(error) {
    return {type: PRODUCTS_ACTION_TYPE.GET_ALL_PRODUCTS_FAILURE, error};
  }
}

// products details

function GetproductDeatilsAction(data) {
  return dispatch => {
    dispatch(request());
    return ProductsService.GetProductDetails(data).then(
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
      type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_DETAILS_REQUEST,
    };
  }
  function success(data) {
    return {type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_DETAILS_SUCCESS, data};
  }
  function failure(error) {
    return {type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_DETAILS_FAILURE, error};
  }
}

// Get Product thumb nail

function GetproductThumNailsAction(data) {
  return dispatch => {
    dispatch(request());
    return ProductsService.GetProductThumbNail(data).then(
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
      type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_THUMBNAIL_REQUEST,
    };
  }
  function success(data) {
    return {type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_THUMBNAIL_SUCCESS, data};
  }
  function failure(error) {
    return {type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_THUMBNAIL_FAILURE, error};
  }
}

// Get Product Review

function GetproductReviewAction(data) {
  return dispatch => {
    dispatch(request());
    return ProductsService.GetProductReview(data).then(
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
      type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_REVIEW_REQUEST,
    };
  }
  function success(data) {
    return {type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_REVIEW_SUCCESS, data};
  }
  function failure(error) {
    return {type: PRODUCTS_ACTION_TYPE.GET_PRODUCTS_REVIEW_FAILURE, error};
  }
}

// Get Simmiler Product

function GetSimmilerproductAction(product_id, category_id) {
  return dispatch => {
    dispatch(request());
    return ProductsService.GetSimmilerroduct(product_id, category_id).then(
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
      type: PRODUCTS_ACTION_TYPE.GET_SIMMILAR_PRODUCTS_REQUEST,
    };
  }
  function success(data) {
    return {type: PRODUCTS_ACTION_TYPE.GET_SIMMILAR_PRODUCTS_SUCCESS, data};
  }
  function failure(error) {
    return {type: PRODUCTS_ACTION_TYPE.GET_SIMMILAR_PRODUCTS_FAILURE, error};
  }
}

//get product by category

function GetProductByCategory(data) {
  return dispatch => {
    dispatch(request());
    return ProductsService.GetProductByCategory(data).then(
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
      type: PRODUCTS_ACTION_TYPE.GET_PRODUCT_BY_CATEGORY_REQUEST,
    };
  }
  function success(data) {
    return {type: PRODUCTS_ACTION_TYPE.GET_PRODUCT_BY_CATEGORY_SUCCESS, data};
  }
  function failure(error) {
    return {type: PRODUCTS_ACTION_TYPE.GET_PRODUCT_BY_CATEGORY_FAILURE, error};
  }
}

//---------------------------------- ADD PRODUCT REVIEW -----------------------//

function AddProductReviewAction(data) {
  return dispatch => {
    dispatch(request());
    return ProductsService.AddProductReview(data).then(
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
      type: PRODUCTS_ACTION_TYPE.ADD_PRODUCT_REVIEW_REQUEST,
    };
  }
  function success(data) {
    return {type: PRODUCTS_ACTION_TYPE.ADD_PRODUCT_REVIEW_SUCCESS, data};
  }
  function failure(error) {
    return {type: PRODUCTS_ACTION_TYPE.ADD_PRODUCT_REVIEW_FAILURE, error};
  }
}
