import {put, takeEvery, call, delay} from 'redux-saga/effects';
import {FETCH_COMMENTS, setComments} from '../store/commentReducer';

const fetchCommentsFromApi = (userId) =>
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`);

function* fetchCommentWorker(action) {
  yield delay(5000);
  const data = yield call(fetchCommentsFromApi, action.payload.userId);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setComments(json));
}

export function* commentWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentWorker);
}

