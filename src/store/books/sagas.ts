import { takeLatest, put, call } from "redux-saga/effects"

import { BOOKS_REQUESTED } from "./actionTypes"
import { requestBooks } from "../../services/books"
import { updateBooks } from "./actionCreators"

function* getBooks() {
  try {
    yield put(updateBooks('isLoading', true))
    
    const { data } = yield call(requestBooks)
    yield put(updateBooks('list', data))

  } catch (error) {

  } finally {
    yield put(updateBooks('isLoading', false))
  }
}

export default function* watcher() {
  yield takeLatest(BOOKS_REQUESTED, getBooks)
}