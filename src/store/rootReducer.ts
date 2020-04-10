import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import booksReducer from "./books/reducer"

const rootReducer = combineReducers({
  form: formReducer,
  books: booksReducer
})

export default rootReducer
