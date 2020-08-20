export const AUTH_ACTIONS = {
    SEND_OTP: 'SEND_OTP',
    SEND_OTP_SUCCESS: 'SEND_OTP_SUCCESS',
    SEND_OTP_ERROR: 'SEND_OTP_ERROR',

    CONFIRM_OTP: 'CONFIRM_OTP',
    CONFIRM_OTP_SUCCESS: 'CONFIRM_OTP_SUCCESS',
    CONFIRM_OTP_ERROR: 'CONFIRM_OTP_ERROR',
};

export const sendOtpAction = ({ phone }) => ({
    type: AUTH_ACTIONS.SEND_OTP,
    phone,
});

export const confirmOtpAction = ({ phone, otp }) => ({
    type: AUTH_ACTIONS.CONFIRM_OTP,
    phone,
    otp,
});

export default {
    AUTH_ACTIONS,
    sendOtpAction,
    confirmOtpAction,
};
