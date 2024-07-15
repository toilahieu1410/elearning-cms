import {
  GET_USER,
  GET_FIND_USER
} from '../types'

const initialState = {
  userInfo: {},
  findUser: []
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userInfo: action.data
      }
    case GET_FIND_USER:
      return {
        ...state,
        findUser: action.data
      }
    default : {
      return state
    }
  }
}

export default auth