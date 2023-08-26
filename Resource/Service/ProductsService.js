import {Config} from '../Helper/Config';

export const ProductsService = {
  GetAllProductService,
  GetProductDetails,
  GetProductThumbNail,
  GetProductReview,
  GetSimmilerroduct,
  GetProductByCategory,
  AddProductReview,
};

// Get All Produyct
async function GetAllProductService(postData) {
  var URL = Config.API_URL + 'get-all-products.php';
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

// GET PRODUCT DETAILS

async function GetProductDetails(id) {
  var URL = Config.API_URL + 'get-product-details.php?id=' + id;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };
  // console.log(URL, '-------------');
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

// GET PRODUCT THUMB NAIL

async function GetProductThumbNail(id) {
  var URL = Config.API_URL + 'get-product-images.php?id=' + id;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

// gET PRODUCT REVIEW

async function GetProductReview(id) {
  var URL = Config.API_URL + 'get-product-reviews.php?id=' + id;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };
  console.log(URL, '2222222222222222');
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

// GET SIMMIER PRODUCTS

async function GetSimmilerroduct(product_id, category_id) {
  var URL =
    Config.API_URL +
    'get-similar-products.php?product_id=' +
    product_id +
    '&category_id=' +
    category_id;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

//GET PRODUCT BY CATEGORY

async function GetProductByCategory(category_id) {
  var URL =
    Config.API_URL + 'get-category-products.php?category_id=' + category_id;

  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

//------------------------------ADD PRODUCT REVIEW --------------------------------//

async function AddProductReview(postData) {
  var URL = Config.API_URL + 'add-product-review.php';

  const requestOptions = {
    method: 'POST',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: postData,
  };

  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

function handleResponse(response) {
  /// console.log('response////////////////////',response)
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    //console.log('service-------------', data)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      // console.log("**********", error)

      return Promise.reject(error);
    }

    return data;
  });
}
