import { BOOKS_REQUESTED, UPDATE_BOOKS, UPDATE_BOOK_LIST} from './actionTypes'
import { IBook } from '../../types/IBook'


export const updateBooks = (name: string, value: any) => ({
  type: UPDATE_BOOKS,
  payload: {
    name,
    value
  }
})

export const requestBooks = () => ({
  type: BOOKS_REQUESTED
})


export const updateBookList = (list: IBook[]) => ({
  type: UPDATE_BOOK_LIST,
  payload: list
})