import { call, put, takeLatest } from 'redux-saga/effects';
import { logIn } from '../services/authService';

function* logInSaga({ payload }) {
  try {
    const { username, password } = payload;
    yield call(logIn, username, password);
    yield put({ type: 'AUTHORIZATION_SUCCESS', payload: username });
  } catch (e) {
    yield put({ type: 'AUTHORIZATION_FAIL' });
  }
}

export default function* () {
  yield takeLatest('LOG_IN', logInSaga);
}
