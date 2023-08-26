import {Config} from '../Helper/Config';

export const profileService = {
  UpdateProfileService,
};

async function UpdateProfileService(postData) {
  console.log(postData, '-------------');
  var URL = Config.API_URL + 'update-profile.php';
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
