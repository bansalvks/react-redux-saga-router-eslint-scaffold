import { all } from 'redux-saga/effects';
import authSagas from './auth-saga';

export default function* sagas() {
    yield all([
        ...authSagas,
    ]);
}
