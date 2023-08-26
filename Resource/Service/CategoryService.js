import {Config} from '../Helper/Config';

export const CategoryService = {
  GetGetgoryService,
  GetSubgoryService,
};

async function GetGetgoryService(postData) {
  console.log('Post', postData);
  var URL = Config.API_URL + 'get-categories.php';
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

//---------------------------GET SUB CATEGORY -----------------------------//

async function GetSubgoryService(ID) {
  var URL = Config.API_URL + 'get-sub-categories.php?category_id=' + ID;
  const requestOptions = {
    method: 'GET',

    headers: {
      'Content-Type': 'multipart/form-data',
    },
    // body: postData,
  };
  console.log(URL, '**********************---------------------------ff----');
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
