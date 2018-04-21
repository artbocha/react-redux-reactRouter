import { call, put, takeLatest } from 'redux-saga/effects';
import { logIn } from '../services/authService';

function* logInSaga(action) {
  try {
    yield call(logIn, action.payload.username, action.payload.password);
    yield put({ type: 'AUTHORIZATION_SUCCESS' });
  } catch (e) {
    yield put({ type: 'AUTHORIZATION_FAIL' });
  }
}

export default function* () {
  yield takeLatest('LOG_IN', logInSaga);
}
