import {put, takeEvery, call, delay} from 'redux-saga/effects';
import {FETCH_POSTS, setPosts} from '../store/postReducer';

const fetchPostsFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/posts');

function* fetchPostWorker() {
  yield delay(500);
  const data = yield call(fetchPostsFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setPosts(json));
}

export function* postWatcher() {
  yield takeEvery(FETCH_POSTS, fetchPostWorker);
}

