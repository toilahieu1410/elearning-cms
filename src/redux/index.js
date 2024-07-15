import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import sideBar from './sideBar/reducer'
import auth from './auth/reducer'
import danhMuc from './danhMuc/reducer'

const rootReducer = combineReducers({
  sideBar, auth, danhMuc
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store