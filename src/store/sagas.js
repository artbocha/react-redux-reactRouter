import { call, put, takeLatest } from 'redux-saga/effects';
import { logIn } from '../services/authService';

function* logInSaga({ payload }) {
  try {
    const { username, password } = payload;
    yield call(logIn, username, password);
    yield put({ type: 'AUTHORIZATION_SUCCESS', payload: username });
  } catch (error) {
    yield put({ type: 'AUTHORIZATION_FAIL', payload: error.message, error: true });
  }
}

export default function* () {
  yield takeLatest('LOG_IN', logInSaga);
}
