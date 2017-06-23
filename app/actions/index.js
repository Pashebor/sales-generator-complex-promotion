import {requestCallback} from '../utils/ajax';

/*CONSTANTS*/
export const GET_MODAL_FORM = 'showModal';
export const OPEN_FULL_CASE = 'openCase';
export const OPEN_SLIDER = 'openSlider';
export const SEND_MESSAGE_SUCCESS = 'sendRequestCallback';
export const SEND_CLIENTS_SUCCESS = 'knowClients';
export const NULL_CALLBACKS = 'nullCallbacks';
export const SCROLLER_OPACITY = 'setOpacity';
export const CONTRACT_FORM = 'contractShow';
export const WORK_PLAN_FORM = 'workPlanShow';
/*ACTIONS*/

export const workPlanShow = (value) => {
    return{
        type: WORK_PLAN_FORM,
        show: value
    }
};

export const contractShow = (value) => {
    return{
        type: CONTRACT_FORM,
        show: value
    }
};

export const setOpacity = (opacity) => {
        return {
            type: SCROLLER_OPACITY,
            opacity: opacity
        }
};

export const showModal = (logicValue) => {
  return{
      type: GET_MODAL_FORM,
      show: logicValue
  }
};

export const openCase = (uri, logicValue) => {
    return {
        type: OPEN_FULL_CASE,
        payload: uri,
        show: logicValue
    }
};

export const openSlider = (uri,logicValue) => {
   return {
       type: OPEN_SLIDER,
       payload: uri,
       show: logicValue
   }
};


export const nullCallbacks = (val1, val2) => {
   return{
       type: NULL_CALLBACKS,
       valOne: val1,
       valTwo: val2
   }
};

/*ASYNC ACTIONS*/

export const sendRequestCallback = (response) => {
    return {
        type: SEND_MESSAGE_SUCCESS,
        payload: response
    }
};

export const knowClients = (response) => {
    return {
        type: SEND_CLIENTS_SUCCESS,
        payload: response
    }
};


export const sendClientsCallback = formData => {
    return dispatch => {
        return requestCallback('./send_mail.php', formData)
            .then(json => {
                dispatch(knowClients(json));
            })
            .catch(err => console.log('error'));
    }
};

export const sendCallback = formData => {
    return dispatch => {
        return requestCallback('./send_mail.php', formData)
            .then(json => {
                dispatch(sendRequestCallback(json));
            })
            .catch(err => console.log('error'));
    }
};


