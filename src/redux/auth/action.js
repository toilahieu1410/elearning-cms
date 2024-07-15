import {
  _getUser,
  _getFindUser
} from '../../api/auth'

import {
  GET_USER,
  GET_FIND_USER
} from '../types'

export const  getUser = (username) => async dispatch => {
  try {
    _getUser(username).then(async (res) => {
      return dispatch({ type: GET_USER, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getFindUser = (tukhoa) => async dispatch => {
  try {
    _getFindUser(tukhoa).then(async (res) => {
      return dispatch({ type: GET_FIND_USER, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}