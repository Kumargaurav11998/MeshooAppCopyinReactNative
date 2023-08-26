import {Config} from '../Helper/Config';

export const BankService = {
  AddBankService,
  GetBankDeTAILSService,
  AddSellerBankDetails,
  GetSellerBankDetails,
};

async function AddBankService(postData) {
  var URL = Config.API_URL + 'save-bank-details.php';
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

//-----------------------GET BANK DETAIL S---------------------------------//

async function GetBankDeTAILSService(ID) {
  var URL = Config.API_URL + 'get-bank-details.php?user_id=' + ID;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    //ody: postData,
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

//---------------------------------- SAVE SELLER BANK DETAILS ---------------------//

async function AddSellerBankDetails(postData) {
  var URL = Config.API_URL + 'save-seller-bank.php';
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

//---------------------------------- SAVE SELLER BANK DETAILS ---------------------//

async function GetSellerBankDetails(id) {
  var URL = Config.API_URL + 'get-seller-bank.php?seller_id=' + id;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
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
