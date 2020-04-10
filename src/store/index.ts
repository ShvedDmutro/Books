import { createStore, applyMiddleware, Middleware } from "redux"
import createSagaMiddleware from "redux-saga"
import thunk from "redux-thunk"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()


const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require('redux-devtools-extension') // eslint-disable-line
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware, thunk])
  )

  sagaMiddleware.run(rootSaga)
  return store
}

const store = configureStore({})

export const { dispatch } = store
export default store
