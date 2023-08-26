import {Config} from '../Helper/Config';

export const WishListService = {
  AddWishListService,
  GetWishListService,
  RemoveWishListService,
  CheckWishListService,
};

async function AddWishListService(user_id, product_id) {
  var URL =
    Config.API_URL +
    'add-to-wishlist.php?user_id=' +
    user_id +
    '&product_id=' +
    product_id;
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

// gET WISH LIST

async function GetWishListService(user_id) {
  var URL = Config.API_URL + 'get-wishlist.php?userid=' + user_id;

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

//REMOVE WISH LIST

async function RemoveWishListService(user_id, product_id) {
  var URL =
    Config.API_URL +
    'delete-wishlist.php?user_id=' +
    user_id +
    '&product_id=' +
    product_id;

  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };
  console.log(URL);
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

async function CheckWishListService(user_id, product_id) {
  var URL =
    Config.API_URL +
    'check-wishlist.php?user_id=' +
    user_id +
    '&product_id=' +
    product_id;

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
