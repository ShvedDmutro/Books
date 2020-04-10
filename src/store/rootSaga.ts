import { all, fork } from "redux-saga/effects"

import booksSagas from "./books/sagas"

const sagas = [booksSagas]

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)))
}
