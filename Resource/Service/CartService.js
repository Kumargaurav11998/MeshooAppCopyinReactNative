import {Config} from '../Helper/Config';

export const CartService = {
  AddToCartService,
  GetToCartService,
  RemoveFromCartService,
};

//----------------------------------aDD TO CART -----------------------------

async function AddToCartService(postData) {
  console.log('Post', postData);
  var URL = Config.API_URL + 'add-to-cart.php';
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

//---------------------------------GET TO CART -----------------------------

async function GetToCartService(userid) {
  var URL = Config.API_URL + 'get-cart-products.php?userid=' + userid;
  const requestOptions = {
    method: 'POST',

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

//---------------------------------REMOCE FROM  CART -----------------------------

async function RemoveFromCartService(user_id, product_id) {
  var URL =
    Config.API_URL +
    'delete-cart-product.php?user_id=' +
    user_id +
    '&product_id=' +
    product_id;
  const requestOptions = {
    method: 'POST',

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
