import {HELP_CENTER_ACTION_TYPE} from '../ActionType/HelpCenterActionType';
import {HelpCenterService} from '../Service/HelpCenterSevice';

export const HelpCenterAction = {
  AddSupportTicket,
  GetSupportTicket,
};

function AddSupportTicket(data) {
  return dispatch => {
    dispatch(request());
    return HelpCenterService.AddSupportTicket(data).then(
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
      type: HELP_CENTER_ACTION_TYPE.SAVE_SUPPORT_TICKET_REQUEST,
    };
  }
  function success(data) {
    return {type: HELP_CENTER_ACTION_TYPE.SAVE_SUPPORT_TICKET_SUCCESS, data};
  }
  function failure(error) {
    return {type: HELP_CENTER_ACTION_TYPE.SAVE_SUPPORT_TICKET_FAILURE, error};
  }
}

// ---------------------------------- Get All ticket -------------------------//

function GetSupportTicket(data) {
  return dispatch => {
    dispatch(request());
    return HelpCenterService.GetSupportTickets(data).then(
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
      type: HELP_CENTER_ACTION_TYPE.GET_SUPPORT_TICKET_REQUEST,
    };
  }
  function success(data) {
    return {type: HELP_CENTER_ACTION_TYPE.GET_SUPPORT_TICKET_SUCCESS, data};
  }
  function failure(error) {
    return {type: HELP_CENTER_ACTION_TYPE.GET_SUPPORT_TICKET_FAILURE, error};
  }
}
