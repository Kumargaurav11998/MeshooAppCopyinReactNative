import {PROFILE_ACTION_TYPE} from '../ActionType/ProfileActionType';
import {profileService} from '../Service/ProfileSevice';

export const ProfileAction = {
  UpdateProfile,
};

function UpdateProfile(data) {
  return dispatch => {
    dispatch(request());
    return profileService.UpdateProfileService(data).then(
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
      type: PROFILE_ACTION_TYPE.UPDATE_PROFILE_REQUEST,
    };
  }
  function success(data) {
    return {type: PROFILE_ACTION_TYPE.UPDATE_PROFILE_SUCCESS, data};
  }
  function failure(error) {
    return {type: PROFILE_ACTION_TYPE.UPDATE_PROFILE_FAILURE, error};
  }
}
