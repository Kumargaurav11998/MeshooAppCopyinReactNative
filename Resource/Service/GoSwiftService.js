import {Config} from '../Helper/Config';
import {useDispatch, useSelector} from 'react-redux';

export const GoSwiftService = {
  GetAccessCode,
  AddPickUpaddressGoSwift,
  CreateOrderGo_Swift_Service,
  Track_OrderGo_Swift_Service,
  Check_pincode_Go_Swift_Service,
  Order_Cancel_Go_Swift_Service,
};

async function GetAccessCode(postData) {
  // console.log(postData);
  var URL =
    'https://app.goswift.in/integrations/v2/auth/token/6124dc81eb1794007184ae4c';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: 'Password@1',
      username: 'help@lazyhouse.in',
    }),
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

//---------------------- SAVE SELLER PICKEUP ADDRESS ---------------------------//

async function AddPickUpaddressGoSwift(postData, token) {
  //  console.log(postData, token);
  var URL = 'https://app.goswift.in/api/v2/address';
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
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

//---------------------- Order Placed  PICKEUP ADDRESS ---------------------------//

async function CreateOrderGo_Swift_Service(postData, token) {
  console.log(postData);
  var URL = 'https://app.goswift.in/api/v1/package/create';
  const requestOptions = {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
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

//---------------------- Order Placed  PICKEUP ADDRESS ---------------------------//

async function Track_OrderGo_Swift_Service(orderid, token) {
  var URL = 'https://app.goswift.in/api/v1/track/' + orderid;

  const requestOptions = {
    method: 'GET',
    headers: {
      //  Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(postData),
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

//---------------------- CheckPincode ADDRESS ---------------------------//

async function Check_pincode_Go_Swift_Service(pincode, token) {
  console.log(pincode);
  var URL = 'https://app.goswift.in/api/v2/serviceability/' + pincode;
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(postData),
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

//---------------------- OrderCancel_Go_Swift_Service ADDRESS ---------------------------//

async function Order_Cancel_Go_Swift_Service(postData, token) {
  console.log(postData, '------------');

  var URL = 'https://app.goswift.in/api/v1/package/cancel';
  const requestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
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
  // console.log('reponse-------------', response);
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log('service-------------', data);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
