import {Config} from '../Helper/Config';

export const AddressService = {
  AddAddressService,
  GetAddressService,
  DELETEAddressService,
  UPDATEAddressService,
  AddSellerPickUpAddressService,
  GetSellerAddress,
};
//-----------------------Add Address----------------------//
async function AddAddressService(postData) {
  console.log(postData);
  var URL = Config.API_URL + 'add-address.php';
  const requestOptions = {
    method: 'POST',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: postData,
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

//-----------------------Get Address----------------------//
async function GetAddressService(ID, param) {
  var URL =
    Config.API_URL +
    'get-address.php?user_id=' +
    ID +
    '&address_category=' +
    param;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };

  console.log('Address', URL);
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err, '__+_+_');
    });
}

//-----------------------UPDATE Address----------------------//
async function UPDATEAddressService(postData) {
  console.log(postData);
  var URL = Config.API_URL + 'update-address.php';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: postData,
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

//-----------------------DELETE Address----------------------//
async function DELETEAddressService(ID) {
  var URL = Config.API_URL + 'delete-address.php?address_id=' + ID;
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

//------------------------------ Add Seller Address --------------------------//

async function AddSellerPickUpAddressService(postData) {
  var URL = Config.API_URL + 'save-seller-address.php';
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

//-------------------------- GET  SELLER ADDRESS -----------------------------//

async function GetSellerAddress(id) {
  var URL = Config.API_URL + 'get-seller-address.php?seller_id=' + id;
  console.log(URL);
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
