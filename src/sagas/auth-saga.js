import { AUTH_ACTIONS } from 'src/actions/auth-actions';
import { takeLatest } from 'redux-saga/effects';

export function* sendOtpSaga() {
    console.debug('Jai Mata Di');
    yield 'Jai Mata Di';
}

export default [
    takeLatest(AUTH_ACTIONS.SEND_OTP, sendOtpSaga),
];
