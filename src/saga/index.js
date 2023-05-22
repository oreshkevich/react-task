import {spawn, call, all} from 'redux-saga/effects';
import {postWatcher} from './postSaga';
import {commentWatcher} from './commentSaga';
import {userWatcher} from './userSaga';

export function* rootWatcher() {
  const sagas = [postWatcher, commentWatcher, userWatcher];

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    });
  });

  yield all(retrySagas);
}

