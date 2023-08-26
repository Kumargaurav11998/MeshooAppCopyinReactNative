import {Config} from '../Helper/Config';

export const OrderService = {
  PostOrderSevice,
  GetOrderSevice,
  GetOrderDsetailsSevice,
  CancelOrderSevice,
};

async function PostOrderSevice(postData) {
  console.log(postData, '11111111111111111111111111111');
  var URL = Config.API_URL + 'save-order.php';
  const requestOptions = {
    method: 'POST',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: postData,
  };
  console.log(URL, '888888888888888888888888888888888888888888888888');
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

//----------------------------------Get Order List Service --------------------------------//

async function GetOrderSevice(id) {
  var URL = Config.API_URL + 'get-user-orders.php?user_id=' + id;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };
  console.log(URL, '-----------------------');
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

//--------------------------------Get Order DETAILS------------------------------------//

async function GetOrderDsetailsSevice(id) {
  var URL = Config.API_URL + 'get-order-details.php?id=' + id;
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

//------------------------------------cANCEL oORDER --------------------------------------//

async function CancelOrderSevice(id) {
  var URL = Config.API_URL + 'cancel-order.php?id=' + id;
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
