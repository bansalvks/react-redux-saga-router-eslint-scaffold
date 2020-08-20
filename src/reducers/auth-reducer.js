import { AUTH_ACTIONS } from 'src/actions/auth-actions';

const defaultState = {
    isAuthorized: false,
    userDetails: {},
    token: '',
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.SEND_OTP_SUCCESS:
            return {
                result: action.payload,
            };
        case AUTH_ACTIONS.SEND_OTP_ERROR:
            return {
                result: action.payload,
            };

        case AUTH_ACTIONS.CONFIRM_OTP_SUCCESS:
            return {
                result: action.payload,
            };
        case AUTH_ACTIONS.CONFIRM_OTP_ERROR:
            return {
                result: action.payload,
            };
        default:
            return state;
    }
};
