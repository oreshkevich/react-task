import {put, takeEvery, call, delay} from 'redux-saga/effects';
import {FETCH_USERS, setUsers} from '../store/userReducer';

const fetchUsersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUserWorker() {
  yield delay(5000);
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}

