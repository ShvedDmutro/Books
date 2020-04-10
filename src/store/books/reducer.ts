import { UPDATE_BOOKS, UPDATE_BOOK_LIST } from './actionTypes'
import { IBooksState } from '../../types/IBooksState'
import { AnyAction } from 'redux'

const initialState: IBooksState = {
  list: [],
  isLoading: false
}

function reducer(state = initialState, action: AnyAction): IBooksState {
  const { type, payload } = action
  switch (type) {
    case UPDATE_BOOKS: {
      const { name, value } = payload
      return {
        ...state,
        ...{ [name]: value }
      }
    }
    case UPDATE_BOOK_LIST: {
      return {
        ...state,
        list: payload
      }
    }
    default:
      return state
  }
}

export default reducer
